---
title: hooks
order: 5
nav:
  title: 表单工具
  order: 3
group:
  path: /
---

## FormContext

一个传递其他组件需要的参数的 context

类型：`React.Context<ContextProps>`

## useFormContext

获取 `FormContext` 的值

类型：`() => ContextProps`

## FormParentNameContext

一个传递 表单名称的 context

类型：`React.Context<string|number>`

## useFormParentNameContext

获取 `FormParentNameContext` 的值

类型：`() => string|number`

## getChildItemFun

通过 `Form.useForm()` 返回值 [from] 进行获取子项中更新值的方法

类型：`(form: FormInstance) => GetChildItemFunRenter`

## useChildItemFun

获取 `from.useForm` 中更新

类型：`(form: FormInstance) => GetChildItemFunRenter`
