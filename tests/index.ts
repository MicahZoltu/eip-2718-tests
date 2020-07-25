import { rlpEncode } from '@zoltu/rlp-encoder'

async function main() {
	rlpEncode([])
}

main().catch(console.error)
