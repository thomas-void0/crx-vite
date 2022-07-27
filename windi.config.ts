import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	preflight: false,
	prefixer: true,
	darkMode: 'class',
	prefix: 'wd-',
	theme: {
		extend: {
			colors: {
				default: 'var(--text-color)',
				primary: 'var(--primary-color)', // 主色
				error: 'var(--error-color)', // 错误色
				success: 'var(--success-color)', // 成功色
				info: 'var(--info-color)', // 信息色
				link: 'var(--link-color)' // 链接色
			}
		}
	}
});
