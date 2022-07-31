import { InternalNamePath, NamePath } from 'rc-field-form/lib/interface';
import { Rule } from 'rc-field-form/lib/interface';
import { FormInstance } from 'rc-field-form';

export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) {
    return [];
  }

  return Array.isArray(candidate) ? candidate : [candidate];
}

export function getFieldId(
  namePath: InternalNamePath,
  formName?: string,
): string | undefined {
  if (!namePath.length) {
    return undefined;
  }

  const mergedId = namePath.join('_');
  return formName ? `${formName}_${mergedId}` : mergedId;
}

export const getNamePath = (path: NamePath) => {
  if (Array.isArray(path)) {
    return path;
  }
  if (typeof path === 'string') {
    return path.split('_').filter((ite) => ite);
  }
  if (typeof path === 'number') {
    return [path];
  }
  return path;
};

export const getRequired = (
  required: boolean | undefined,
  rules: Rule[] | undefined,
  form: FormInstance,
) => {
  const isRequired =
    required !== undefined
      ? required
      : !!(
          rules &&
          rules.some((rule) => {
            if (
              rule &&
              typeof rule === 'object' &&
              rule.required &&
              !rule.warningOnly
            ) {
              return true;
            }
            if (typeof rule === 'function') {
              const ruleEntity = rule(form);
              return (
                ruleEntity && ruleEntity.required && !ruleEntity.warningOnly
              );
            }
            return false;
          })
        );

  return isRequired;
};
