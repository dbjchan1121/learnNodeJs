/**
 * require 特性
 * · module被加载的时候执行，加载后缓存
 * · 一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出
 */

require('./02_cusmod');
require('./02_cusmod');