export enum ResponsiveSize {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
}

export type ResponsiveMap<T> = {
	[K in ResponsiveSize]: T
}

export type Responsive<StyleType> = StyleType | ResponsiveMap<StyleType>
