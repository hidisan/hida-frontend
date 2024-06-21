import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 检查用户权限
 * @param loginUser 登录用户信息
 * @param needAccess 需要的权限
 * @returns {boolean} 是否有权限
 */

const checkAccess = (
  loginUser: API.LoginUserVO,
  needAccess = ACCESS_ENUM.NOT_LOGIN
) => {
  // 获取当前用户权限
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === loginUserAccess) {
    return true;
  }
  //用户访问权限
  if (needAccess === ACCESS_ENUM.USER) {
    // 当前用户未登录，就没有权限
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  // 管理员访问权限
  if (needAccess === ACCESS_ENUM.ADMIN) {
    // 当前用户不是管理员，就没有权限
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
};
export default checkAccess;
