/**
 * ─────────── 1) DTO Class Definitions ───────────
 *
 * These can live in the same file above your component, or in a separate
 * file (e.g. "dtos.js") that you import. The key point is: by the time
 * you do `new UserResponse(rawJson)`, these definitions must be loaded.
 */

/** Models the nested “user_role” object inside each User. */
export class UserRole {
  constructor({ id, role_name, permissions, permission_level }) {
    this.id = id;
    this.roleName = role_name;
    this.permissions = permissions;
    this.permissionLevel = permission_level;
  }
}

/** Models each “user” entry from the API. */
export class User {
  constructor({
    id,
    username,
    email,
    user_role_id,
    password,
    last_login,
    last_updated,
    user_role,
    active,
  }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.userRoleId = user_role_id;
    this.password = password;
    // Convert ISO strings into real JS Date objects
    this.lastLogin = new Date(last_login);
    this.lastUpdated = new Date(last_updated);
    this.userRole = new UserRole(user_role);
    this.active = active;
  }
}

/**
 * A generic “envelope” for API responses of the form:
 *   { success: boolean, message: string, data: Array<…> }
 *
 * Subclasses override parseDataArray() to map raw JSON items → proper DTOs.
 */
export class BaseResponse {
  constructor({ success, message, data }) {
    this.success = success;
    this.message = message;

    // If `data` is an array, call parseDataArray on it. Else use [].
    this.data = Array.isArray(data) ? this.parseDataArray(data) : [];
  }

  /** Default implementation—it just returns the raw array. */
  parseDataArray(rawArray) {
    return rawArray;
  }
}

/** The “UserResponse” whose data array consists of User instances. */
export class UserResponse extends BaseResponse {
  constructor(obj) {
    super(obj);
  }

  /** Convert each raw user object → new User(...) */
  parseDataArray(rawDataArr) {
    return rawDataArr.map((userObj) => new User(userObj));
  }
}

//create user request
export class CreateUserDto {
  /**
   * @param {Object} obj
   * @param {string} obj.username
   * @param {string} obj.email
   * @param {string} obj.password
   * @param {string} obj.user_role_id
   * @param {string|Date} obj.last_login
   * @param {string|Date} obj.last_updated
   * @param {boolean} obj.isActive
   */
  constructor({
    username,
    email,
    password,
    user_role_id,
    last_login,
    last_updated,
    isActive,
  }) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.user_role_id = user_role_id;
    this.last_login = this.toISOString(last_login);
    this.last_updated = this.toISOString(last_updated);
    this.isActive = isActive;
  }

  toISOString(value) {
    return typeof value === 'string' ? value : new Date(value).toISOString();
  }

  toJSON() {
    return {
      username: this.username,
      email: this.email,
      password: this.password,
      user_role_id: this.user_role_id,
      last_login: this.last_login,
      last_updated: this.last_updated,
      isActive: this.isActive,
    };
  }
}

//create user response
// dto/CreateUserResponseDto.js

export class CreateUserResponseDto extends BaseResponse {
  /**
   * @param {Object} obj
   * @param {boolean} obj.success
   * @param {string}  obj.message
   * @param {Object}  obj.data         // { "created on": "...", id: "..." }
   */
  constructor({ success, message, data }) {
    // Call BaseResponse to set `success`, `message`, and raw `data`.
    super({ success, message, data });

    // Now extract specific fields from the returned `data` object:
    this.createdOn = data['created on'];
    this.userId = data.id;
  }

  toJSON() {
    // If you need to serialize again:
    return {
      success: this.success,
      message: this.message,
      data: {
        'created on': this.createdOn,
        id: this.userId,
      },
    };
  }
}

/**
 * DTO for updating an existing user.
 */
export class UpdateUserDto {
  /**
   * @param {Object} obj
   * @param {string} obj.id
   * @param {string} obj.username
   * @param {string} obj.email
   * @param {string} obj.user_role_id
   * @param {string} obj.password
   * @param {string|Date} obj.last_login
   * @param {string|Date} obj.last_updated
   * @param {boolean} obj.active
   */
  constructor({
    id,
    username,
    email,
    user_role_id,
    password,
    last_login,
    last_updated,
    active,
  }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.user_role_id = user_role_id;
    this.password = password;
    this.last_login = this.toISOString(last_login);
    this.last_updated = this.toISOString(last_updated);
    this.active = active;
  }

  toISOString(value) {
    return typeof value === 'string' ? value : new Date(value).toISOString();
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
      user_role_id: this.user_role_id,
      password: this.password,
      last_login: this.last_login,
      last_updated: this.last_updated,
      active: this.active,
    };
  }
}


// // dto/DTOs.js

// // --- UserRole ---
// export class UserRole {
//   constructor({ id, role_name, permissions, permission_level }) {
//     this.id = id;
//     this.roleName = role_name;
//     this.permissions = permissions;
//     this.permissionLevel = permission_level;
//   }
// }

// // --- User ---
// export class User {
//   constructor({
//     id,
//     username,
//     email,
//     user_role_id,
//     password,
//     last_login,
//     last_updated,
//     user_role,
//     active,
//   }) {
//     this.id = id;
//     this.username = username;
//     this.email = email;
//     this.userRoleId = user_role_id;
//     this.password = password;
//     this.lastLogin = new Date(last_login);
//     this.lastUpdated = new Date(last_updated);
//     this.userRole = new UserRole(user_role);
//     this.active = active;
//   }

//   toJSON() {
//     return {
//       id: this.id,
//       username: this.username,
//       email: this.email,
//       user_role_id: this.userRoleId,
//       password: this.password,
//       last_login: this.lastLogin.toISOString(),
//       last_updated: this.lastUpdated.toISOString(),
//       user_role: {
//         id: this.userRole.id,
//         role_name: this.userRole.roleName,
//         permissions: this.userRole.permissions,
//         permission_level: this.userRole.permissionLevel,
//       },
//       active: this.active,
//     };
//   }
// }

// // --- BaseResponse ---
// export class BaseResponse {
//   constructor({ success, message, data }) {
//     this.success = success;
//     this.message = message;
//     this.data = Array.isArray(data) ? this.parseDataArray(data) : [];
//   }

//   parseDataArray(rawDataArr) {
//     return rawDataArr;
//   }

//   toJSON() {
//     return {
//       success: this.success,
//       message: this.message,
//       data: this.data.map((item) =>
//         typeof item.toJSON === 'function' ? item.toJSON() : item
//       ),
//     };
//   }
// }

// // --- UserResponse ---
// export class UserResponse extends BaseResponse {
//   constructor(obj) {
//     super(obj);
//   }

//   parseDataArray(rawDataArr) {
//     return rawDataArr.map((userObj) => new User(userObj));
//   }
// }
