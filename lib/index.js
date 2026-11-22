import { createPlugin, pkgRootFrom } from '@deepwhale-cn/dsh-guard-core/plugin';

export const { name, inject, apply } = createPlugin({
  name: 'industry-pet',
  pkgRoot: pkgRootFrom(import.meta.url),
  skillFile: 'skill/industry-pet.md',
  binFile: 'bin/cli.mjs',
  description: "宠物诊疗/宠物饲料/宠物运输/宠物医疗广告",
  whenToUse: "需要对「宠物行业专项体检」相关项目做自查时使用。",
});
