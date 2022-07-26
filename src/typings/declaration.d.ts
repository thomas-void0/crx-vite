declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';

declare interface ImportMeta {
	readonly VITE_NODE_ENV: 'development' | 'test' | 'production';
}
