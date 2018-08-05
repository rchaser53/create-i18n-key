describe("test", () => {
  describe('createI18nObjs', () => {
    const i18nNameDefs = {
      keyA: 'valueA'
    };
    const OperatorDef = {
      lteLength: '文字以下で',
      ltLength: '文字より少なく',
      gteLength: '文字以上で',
      gtLength: '文字より多く',
    }

    const createI18nObj = (nameDefs, operatorDefs, nameKey: string, conditionKey: string) => {
      return {
        [`${nameKey}${conditionKey}`]: `${nameDefs[nameKey]}は{count}${operatorDefs[conditionKey]}入力してください`
      }
    };

    const createI18nObjs = (nameDefs, operatorDefs) => {
      return Object.keys(nameDefs).reduce((stack, i18nNameKey) => {
        const nextObj = Object.keys(operatorDefs).reduce((innerStack, operatorDefKey) => {
          return { ...innerStack, ...createI18nObj(nameDefs, operatorDefs, i18nNameKey, operatorDefKey)}; 
        }, {});
        return { ...stack, ...nextObj };
      }, {});
    }

    test('create i18n object', async () => {
      const retObj = {
        keyAlteLength: 'valueAは{count}文字以下で入力してください',
        keyAltLength: 'valueAは{count}文字より少なく入力してください',
        keyAgteLength: 'valueAは{count}文字以上で入力してください',
        keyAgtLength: 'valueAは{count}文字より多く入力してください'
      }
      expect(createI18nObjs(i18nNameDefs, OperatorDef)).toEqual(retObj);
    });
  });
});

// {
  // namelteLength: '{count}{condition}入力してください'
// }


// const createMessage = (condtionKey: string, key: string, value: number): string => {
//   return `${i18nNameDefs[key]}は${value}${OperatorDef[condtionKey]}入力してください`
//   // return `${LangDef[key]}は${value}${OperatorDef[condtionKey]}入力してください`
// }