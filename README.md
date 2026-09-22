# Snow Vanilla

Snow Vanilla 是一个完全由用户字卡驱动的梦向交流网站。角色消息不会调用 AI，所有数据默认保存在当前浏览器的 `localStorage` 中。

## 本地预览

```bash
npm run serve
```

浏览器打开 `http://localhost:4173/`。

## GitHub Pages 部署

仓库已经包含 GitHub Pages Actions 工作流，不需要构建工具，也不需要修改资源地址。页面使用相对路径加载 CSS、JavaScript 和 Web App Manifest，因此无论根地址还是 `/snow-vanilla/` 子路径都能正常加载。

1. 将当前分支推送到 GitHub，或把更改合并到 `main`。
2. 打开 GitHub 仓库，依次点击 **Settings → Pages**。
3. 在 **Build and deployment** 下将 **Source** 选择为 **GitHub Actions**。
4. 点击仓库顶部的 **Actions**，打开 **Deploy Snow Vanilla to GitHub Pages**，等待带有绿色对勾的部署完成。
5. 回到 **Settings → Pages**，点击 **Visit site**。项目站点通常为 `https://<你的用户名>.github.io/snow-vanilla/`。

在手机浏览器打开该地址即可使用。iPhone 可在 Safari 的分享菜单选择“添加到主屏幕”；Android 可在浏览器菜单选择“添加到主屏幕”或“安装应用”。

> 数据按浏览器和域名分别存储。电脑浏览器中的数据不会自动同步到手机，请使用网站内的“导出 JSON / 导入 JSON”迁移数据。

## 检查

```bash
npm run check
```

该命令会检查 JavaScript 语法、HTML 中的本地资源是否存在，以及资源路径是否能在 GitHub Pages 子路径下安全加载。
