import{_ as e,c as p,o as a,a6 as i}from"./chunks/framework.DJOiR4ue.js";const k=JSON.parse('{"title":"npm包管理器","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"architect/npm.md","filePath":"architect/npm.md","lastUpdated":1720842133000}'),n={name:"architect/npm.md"},o=i(`<h1 id="npm包管理器" tabindex="-1">npm包管理器 <a class="header-anchor" href="#npm包管理器" aria-label="Permalink to &quot;npm包管理器&quot;">​</a></h1><h2 id="npm简介" tabindex="-1">npm简介 <a class="header-anchor" href="#npm简介" aria-label="Permalink to &quot;npm简介&quot;">​</a></h2><p><code>npm</code>（全称 Node Package Manager）是 <code>Node.js</code> 的包管理工具，它是一个基于命令行的工具，用于帮助开发者在自己的项目中安装、升级、移除和管理依赖项。</p><p>官方网站： <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">https://www.npmjs.com/</a></p><ul><li><p>类似于 PHP 的工具：Composer。它是 PHP 的包管理器，可以用于下载、安装和管理 PHP 的依赖项，类似于 npm。</p></li><li><p>类似于 Java 的工具：Maven。它是 Java 的构建工具和项目管理工具，可以自动化构建、测试和部署 Java 应用程序，类似于 npm 和 webpack 的功能。</p></li><li><p>类似于 Python 的工具：pip。它是 Python 的包管理器，可以用于安装和管理 Python 的依赖项，类似于 npm。</p></li><li><p>类似于 Rust 的工具：Cargo。它是 Rust 的包管理器和构建工具，可以用于下载、编译和管理 Rust 的依赖项，类似于 npm 和 Maven 的功能。</p></li></ul><h2 id="npm-命令" tabindex="-1">npm 命令 <a class="header-anchor" href="#npm-命令" aria-label="Permalink to &quot;npm 命令&quot;">​</a></h2><ol><li><p><code>npm init</code>：初始化一个新的 npm 项目，创建 package.json 文件。</p></li><li><p><code>npm install</code>：安装一个包或一组包，并且会在当前目录存放一个node_modules。</p></li><li><p><code>npm install &lt;package-name&gt;</code>：安装指定的包。</p></li><li><p><code>npm install &lt;package-name&gt; --save</code>：安装指定的包，并将其添加到 package.json 文件中的依赖列表中。</p></li><li><p><code>npm install &lt;package-name&gt; --save-dev</code>：安装指定的包，并将其添加到 package.json 文件中的开发依赖列表中。</p></li><li><p><code>npm install -g &lt;package-name&gt;</code>：全局安装指定的包。</p></li><li><p><code>npm update &lt;package-name&gt;</code>：更新指定的包。</p></li><li><p><code>npm uninstall &lt;package-name&gt;</code>：卸载指定的包。</p></li><li><p><code>npm run &lt;script-name&gt;</code>：执行 package.json 文件中定义的脚本命令。</p></li><li><p><code>npm search &lt;keyword&gt;</code>：搜索 npm 库中包含指定关键字的包。</p></li><li><p><code>npm info &lt;package-name&gt;</code>：查看指定包的详细信息。</p></li><li><p><code>npm list</code>：列出当前项目中安装的所有包。</p></li><li><p><code>npm outdated</code>：列出当前项目中需要更新的包。</p></li><li><p><code>npm audit</code>：检查当前项目中的依赖项是否存在安全漏洞。</p></li><li><p><code>npm publish</code>：发布自己开发的包到 npm 库中。</p></li><li><p><code>npm login</code>：登录到 npm 账户。</p></li><li><p><code>npm logout</code>：注销当前 npm 账户。</p></li><li><p><code>npm link</code>: 将本地模块链接到全局的 <code>node_modules</code> 目录下。</p></li><li><p><code>npm config list</code>: 用于列出所有的 npm 配置信息。执行该命令可以查看当前系统和用户级别的所有 npm 配置信息，以及当前项目的配置信息（如果在项目目录下执行该命令）。</p></li><li><p><code>npm get registry</code> 用于获取当前 npm 配置中的 registry 配置项的值。registry 配置项用于指定 npm 包的下载地址，如果未指定，则默认使用 npm 官方的包注册表地址。</p></li><li><p><code>npm set registry</code> <code>npm config set registry &lt;registry-url&gt;</code> 命令，将 registry 配置项的值修改为指定的 <code>&lt;registry-url&gt;</code> 地址。</p></li></ol><h2 id="package-json文件" tabindex="-1">Package.json文件 <a class="header-anchor" href="#package-json文件" aria-label="Permalink to &quot;Package.json文件&quot;">​</a></h2><p>执行npm init 便可以初始化一个package.json文件，该文件包含了项目的相关信息，包括项目名称、版本、描述、作者、许可证、依赖等。</p><ol><li><p><code>name</code>：项目名称，必须是唯一的字符串，通常采用小写字母和连字符的组合。</p></li><li><p><code>version</code>：项目版本号，通常采用语义化版本号规范。</p></li><li><p><code>description</code>：项目描述。</p></li><li><p><code>main</code>：项目的主入口文件路径，通常是一个 JavaScript 文件。</p></li><li><p><code>keywords</code>：项目的关键字列表，方便他人搜索和发现该项目。</p></li><li><p><code>author</code>：项目作者的信息，包括姓名、邮箱、网址等。</p></li><li><p><code>license</code>：项目的许可证类型，可以是自定义的许可证类型或者常见的开源许可证（如 MIT、Apache 等）。</p></li><li><p><code>dependencies</code>：项目所依赖的包的列表，这些包会在项目运行时自动安装。</p></li><li><p><code>devDependencies</code>：项目开发过程中所需要的包的列表，这些包不会随项目一起发布，而是只在开发时使用。</p></li><li><p><code>peerDependencies</code>：项目的同级依赖，即项目所需要的模块被其他模块所依赖。</p></li><li><p><code>scripts</code>：定义了一些脚本命令，比如启动项目、运行测试等。</p></li><li><p><code>repository</code>：项目代码仓库的信息，包括类型、网址等。</p></li><li><p><code>bugs</code>：项目的 bug 报告地址。</p></li><li><p><code>homepage</code>：项目的官方网站地址或者文档地址。</p></li></ol><h2 id="版本号" tabindex="-1">版本号 <a class="header-anchor" href="#版本号" aria-label="Permalink to &quot;版本号&quot;">​</a></h2><p>version 三段式版本号一般是1.0.0 大版本号 次版本号 修订号</p><ul><li><p>大版本号一般是有重大变化才会升级</p></li><li><p>次版本号一般是增加功能进行升级</p></li><li><p>修订号一般是修改bug进行升级</p></li></ul><h2 id="扁平化安装" tabindex="-1">扁平化安装 <a class="header-anchor" href="#扁平化安装" aria-label="Permalink to &quot;扁平化安装&quot;">​</a></h2><p>npm install 安装模块的时候一般是扁平化安装的，但是有时候出现嵌套的情况是因为版本不同。</p><p>A 依赖 C 1.0 ，</p><p>B 依赖 C 1.0 ，</p><p>D 依赖 C 2.0 ，</p><p>此时 C 1.0 就会被放到A B的<code>node_modules</code>，</p><p>C 2.0 会被放入 D 模块下面的<code>node_modules</code>。</p><h2 id="在执行npm-install-的时候发生了什么" tabindex="-1">在执行npm install 的时候发生了什么？ <a class="header-anchor" href="#在执行npm-install-的时候发生了什么" aria-label="Permalink to &quot;在执行npm install 的时候发生了什么？&quot;">​</a></h2><p>首先安装的依赖都会存放在根目录的node_modules,默认采用扁平化的方式安装，并且排序规则.bin第一个然后@系列，再然后按照首字母排序abcd等，并且使用的算法是广度优先遍历，在遍历依赖树时，npm会首先处理项目根目录下的依赖，然后逐层处理每个依赖包的依赖，直到所有依赖都被处理完毕。在处理每个依赖时，npm会检查该依赖的版本号是否符合依赖树中其他依赖的版本要求，如果不符合，则会尝试安装适合的版本。</p><p>具体查阅：<a href="https://juejin.cn/post/7261119531891490877" target="_blank" rel="noreferrer">https://juejin.cn/post/7261119531891490877</a></p><h2 id="package-lock-json-的作用" tabindex="-1">package-lock.json 的作用 <a class="header-anchor" href="#package-lock-json-的作用" aria-label="Permalink to &quot;package-lock.json 的作用&quot;">​</a></h2><p>很多朋友只知道这个东西可以锁定版本记录依赖树详细信息</p><ul><li><code>version</code> 该参数指定了当前包的版本号</li><li><code>resolved</code> 该参数指定了当前包的下载地址</li><li><code>integrity</code> 用于验证包的完整性</li><li><code>dev</code> 该参数指定了当前包是一个开发依赖包</li><li><code>bin</code> 该参数指定了当前包中可执行文件的路径和名称</li><li><code>engines</code> 该参数指定了当前包所依赖的Node.js版本范围</li></ul><p><code>package-lock.json</code> 帮我们做了缓存，他会通过 name + version + integrity 信息生成一个唯一的key，这个key能找到对应的index-v5 下的缓存记录。</p><h2 id="npm-run-xxx-发生了什么" tabindex="-1">npm run xxx 发生了什么 <a class="header-anchor" href="#npm-run-xxx-发生了什么" aria-label="Permalink to &quot;npm run xxx 发生了什么&quot;">​</a></h2><p>读取 <code>package json</code> 的 <code>scripts</code> 对应的脚本命令(dev:vite)，vite是个可执行脚本，他的查找规则是：</p><ul><li><p>先从当前项目的 node_modules/.bin去查找可执行命令vite</p></li><li><p>如果没找到就去全局的 node_modules 去找可执行命令vite</p></li><li><p>如果还没找到就去环境变量查找</p></li><li><p>再找不到就进行报错</p></li></ul><p>如果成功找到会发现有三个文件。 <code>Node.js</code> 是跨平台的所以可执行命令兼容各个平台。</p><ul><li><p><code>.sh</code> 文件是给Linux unix Macos 使用</p></li><li><p><code>.cmd</code> 给 Windows 的 cmd 使用</p></li><li><p><code>.ps1</code> 给 Windows 的 PowerShell 使用</p></li></ul><h2 id="npm-生命周期" tabindex="-1">npm 生命周期 <a class="header-anchor" href="#npm-生命周期" aria-label="Permalink to &quot;npm 生命周期&quot;">​</a></h2><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;predev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node prev.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;postdev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node post.js&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>执行 <code>npm run dev</code> 命令的时候 <code>predev</code> 会自动执行 他的生命周期是在 <code>dev</code> 之前执行，然后执行 <code>dev</code> 命令，再然后执行 <code>postdev</code> ，也就是 <code>dev</code> 之后执行</p><p>运用场景例如 <code>npm run build</code> 可以在打包之后删除 <code>dist</code> 目录等等</p><p><code>post</code> 例如你编写完一个工具发布 <code>npm</code> ，那就可以在之后写一个 <code>CI</code> 脚本顺便帮你推送到 <code>git</code> 等等。</p><h2 id="npx" tabindex="-1">npx <a class="header-anchor" href="#npx" aria-label="Permalink to &quot;npx&quot;">​</a></h2><h3 id="npx是什么" tabindex="-1">npx是什么 <a class="header-anchor" href="#npx是什么" aria-label="Permalink to &quot;npx是什么&quot;">​</a></h3><p>npx是一个命令行工具，它是npm 5.2.0版本中新增的功能。它允许用户在不安装全局包的情况下，运行已安装在本地项目中的包或者远程仓库中的包。</p><p>npx的作用是在命令行中运行node包中的可执行文件，而不需要全局安装这些包。这可以使开发人员更轻松地管理包的依赖关系，并且可以避免全局污染的问题。它还可以帮助开发人员在项目中使用不同版本的包，而不会出现版本冲突的问题。</p><h3 id="npx-的优势" tabindex="-1">npx 的优势 <a class="header-anchor" href="#npx-的优势" aria-label="Permalink to &quot;npx 的优势&quot;">​</a></h3><ol><li><p>避免全局安装：<code>npx</code>允许你执行npm package，而不需要你先全局安装它。</p></li><li><p>总是使用最新版本：如果你没有在本地安装相应的npm package，<code>npx</code>会从npm的package仓库中下载并使用最新版。</p></li><li><p>执行任意npm包：<code>npx</code>不仅可以执行在<code>package.json</code>的<code>scripts</code>部分定义的命令，还可以执行任何npm package。</p></li><li><p>执行GitHub gist：<code>npx</code>甚至可以执行GitHub gist或者其他公开的JavaScript文件。</p></li></ol><h3 id="npm-和-npx-区别" tabindex="-1">npm 和 npx 区别 <a class="header-anchor" href="#npm-和-npx-区别" aria-label="Permalink to &quot;npm 和 npx 区别&quot;">​</a></h3><p><code>npx</code>侧重于执行命令，执行某个模块命令。虽然会自动安装模块，但是重在执行某个命令。</p><p><code>npm</code>侧重于安装或者卸载某个模块。重在安装，并不具备执行某个模块的功能。</p><p>具体翻阅：<a href="https://juejin.cn/post/7261423108509302842" target="_blank" rel="noreferrer">https://juejin.cn/post/7261423108509302842</a></p><h3 id="npx运行规则" tabindex="-1">npx运行规则 <a class="header-anchor" href="#npx运行规则" aria-label="Permalink to &quot;npx运行规则&quot;">​</a></h3><p>npx 的运行规则和npm 是一样的，本地目录查找.bin 看有没有，如果没有就去全局的node_modules 查找，如果还没有就去下载这个包然后运行命令，然后删除这个包。</p>`,49),l=[o];function d(c,t,s,r,h,m){return a(),p("div",null,l)}const g=e(n,[["render",d]]);export{k as __pageData,g as default};
