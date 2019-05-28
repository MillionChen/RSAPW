// 引入jsrsasign包 文档详情请看git https://github.com/kjur/jsrsasign
import jsrsasign from "./jsrsasign/lib/jsrsasign";
// 引入公钥
import {Rsa} from './ras';
// 指定算法规则
const RSA = {
  RSAKey : jsrsasign.RSAKey,
  KEYUTIL : jsrsasign.KEYUTIL,
  hex2b64 : jsrsasign.hex2b64,
  b64tohex : jsrsasign.b64tohex
}
// 导出加密方法 采用hex2b64格式
var ext = {
  /*
    加密
  */
  en: function (deStr) {
    var encrypt_rsa = new RSA.RSAKey();
    encrypt_rsa = RSA.KEYUTIL.getKey(Rsa.may_key);
    var encStr = encrypt_rsa.encrypt(deStr)
    encStr = RSA.hex2b64(encStr);
    return encStr
  }
}
// 函数执行传递加密的密码即可
let get_over=password=>ext.en(password);
// 函数执行传递加密的密码即可
// function get_over (password) {
//   return ext.en(password);
// }
// 目前只导出一个函数方法，支持扩展
export {get_over}
