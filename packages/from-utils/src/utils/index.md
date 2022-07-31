---
title: utils
order: 6
nav:
  order: 9
  title: FormUtils
  path: /from-utils
group:
  path: /
---

## getNamePath

字段转换成 `_` 拼接的字符串

类型：`(path: NamePath) => number | InternalNamePath`

## getFieldId

把表单项字段和表单名称 使用 `_` 拼接在一起

类型：`(namePath: InternalNamePath, formName?: string): string | undefined`

## toArray

转换成数组

类型：`function toArray<T>(candidate?: T | T[] | false): T[]`

## getRequired

获取是否是必填

类型：`function getRequired(required: boolean | undefined, rules: Rule[] | undefined, form: FormInstance) => boolean`
