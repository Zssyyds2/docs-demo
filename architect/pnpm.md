---
outline: deep
---

# pnpm包管理器

如果遇到不可重复使用的模块，pnpm会在仓库中，也就是.pnpm-store文件夹中，缓存该模块，以便下次使用时直接从缓存中获取。好处是可以离线安装，也可以通过硬链接直接拿。坏处是这个包会越来越大。

如果遇到可复用的模块，pnpm会使用软连接去链接到全局，而不是复制文件，这样可以节省磁盘空间，提高效率。

![pnpm包管理器](/pnpm.jpeg)