# @deepwhale-cn/dsh-industry-pet

宠物诊疗/宠物饲料/宠物运输/宠物医疗广告（深鲸守护系列 · 基于 dsh-guard-core）

## 用法

```bash
npx @deepwhale-cn/dsh-industry-pet --root <项目目录>
npx @deepwhale-cn/dsh-industry-pet --demo        # 内置样本演示
npx @deepwhale-cn/dsh-industry-pet --list-rules  # 判据与法规出处
npx @deepwhale-cn/dsh-industry-pet --html r.html # HTML 报告
```

## 规则

TODO —— 规则表。命中 ≠ 违规；每条带 文件:行 与出处。

## 已知边界

TODO —— 静态检查的适用范围与不适用情形，写清楚防误用。

## 安装（DSH）

```bash
dsh plugin --profile web add @deepwhale-cn/dsh-industry-pet
```

也可以 `npm i @deepwhale-cn/dsh-industry-pet`，或从本仓库直接 `dsh plugin install ./`。
