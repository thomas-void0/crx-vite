import React, { ReactNode } from 'react';

import ReactDOM from 'react-dom/client';

/* 获取环境变量 */
export function getEnv() {
	return import.meta.VITE_NODE_ENV;
}

/**
 * 渲染根节点
 * @param children 组件
 */
export function renderRoot(children: ReactNode) {
	ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
		<React.StrictMode>{children}</React.StrictMode>
	);
}
