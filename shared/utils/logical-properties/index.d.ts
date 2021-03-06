export default {
	inset: () => () => ({ top: string, right: string, bottom: string, left: string }),
	insetBlock: () => () => ({ top: string, bottom: string }),
	insetBlockEnd: () => () => ({ bottom: string }),
	insetBlockStart: () => () => ({ top: string }),
	insetInline: () => () => ({ left: string, right: string }),
	insetInlineEnd: () => () => any,
	insetInlineStart: () => () => any,
	marginBlock: () => () => ({ marginBlockStart: string, marginBlockEnd: string })),
	marginInline: () => () => ({ marginInlineStart: string, marginInlineEnd: string })),
	maxSize: () => () => ({ maxBlockSize: string, maxInlineSize: string })),
	minSize: () => () => ({ minBlockSize: string, minInlineSize: string })),
	paddingBlock: () => () => ({ paddingBlockStart: string, paddingBlockEnd: string })),
	paddingInline: () => () => ({ paddingInlineStart: string, paddingInlineEnd: string })),
	size: () => () => ({ blockSize: string, inlineSize: string }),
}
