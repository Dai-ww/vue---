module.exports = {
    /**
     * 引用 @antfu 的eslint配置，跟着大佬配没有错
     */
    extends: '@antfu',
    /**
     * 忽略配置
     */
    ignorePatterns: [
        // d.ts需要校验
        '!*.d.ts'
    ],
    rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
        // if使用大括号
        'curly': ['error', 'all'],
        // 单文件模板排序规则
        'vue/component-tags-order': ['error', {
            order: [['template', 'script'], 'style']
        }],
        // v-on 随便使用驼峰或者连字符
        'vue/v-on-event-hyphenation': 'off',
        // 行尾不允许有逗号
        '@typescript-eslint/comma-dangle': ['error', 'never'],
        // 行尾分号要有分号
        '@typescript-eslint/semi': ['error', 'always'],
        // 允许使用ts忽略
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        // 大括号样式
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        // 忽略与系统原组件相同名字报错
        'vue/no-reserved-component-names': 'off',
        // 不强制转换v-bind.sync语法
        'vue/no-deprecated-v-bind-sync': 'off',
        // 使用过滤器
        'vue/no-deprecated-filter': 'off',
        // 使用原生修饰符
        'vue/no-deprecated-v-on-native-modifier': 'off',
        // 禁止转义插槽语法糖
        'vue/no-deprecated-slot-attribute': 'off',
        // 允许key放在template的下面的真实element中
        'vue/no-v-for-template-key-on-child': 'off',
        // 关闭名称校验
        'vue/muti-word-compnent-names': 'off'
    }
};
