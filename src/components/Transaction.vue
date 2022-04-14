<template>
	<div class="row transaction">
		<div class="col text-left" style="text-align: -webkit-center;">
			<div class="storage">
				<q-img :src="iconSrc" />
			</div>
		</div>
		<div class="col-6">
			<span class="title">{{ title }}</span>
			<span class="date">{{ date }}</span>
			<span class="info">
				<span>
					<q-img src="img/business-and-finance.svg" />
				</span>
				{{ infoText }}
			</span>
		</div>
		<div :class="{'col-4 text-right amount': true, 'text-primary': type === 'credit'}">
			{{ sign }} S$ {{ amount }}
			<q-img src="img/next.svg" />
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Transaction',
	props: {
		title: {
			type: String,
			default: null,
		},
		date: {
			type: String,
			default: null,
		},
		type: {
			type: String,
			default: null,
		},
		card: {
			type: String,
			default: null,
		},
		amount: {
			type: Number,
			default: 0
		},
		icon: {
			type: String,
			default: null,
		}
	},
	setup () {
		// ...
	},
	computed: {
		infoText () {
			if (this.type === 'credit') {
				return `Refund on ${this.card} card`
			} else if (this.type === 'debit') {
				return `Charged to ${this.card} card`
			} else {
				return 'N/A'
			}
		},
		sign () {
			if (this.type === 'credit') {
				return '+'
			} else if (this.type === 'debit') {
				return '-'
			} else {
				return ''
			}
		},
		iconSrc () {
			switch (this.icon) {
				case 'storage':
					return 'img/file-storage.svg'
				case 'flight':
					return 'img/flights.svg'
				case 'megaphone':
					return 'img/megaphone.svg'
				default:
					return 'img/file-storage.svg'
			}
		}
	}
})
</script>

<style lang="scss" scoped>
	.transaction {
		padding: 15px;
		border-bottom: 1px solid #F5F5F5;
		cursor: pointer;

		.storage {
			width: 48px;
			height: 48px;
			background-color: #009DFF1A;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			
			.q-img {
				height: 16px; width: 16px;
			}
		}

		.title {
			display: block;
			font-size: 14px;
			font-weight: 600;
		}

		.date {
			display: block;
			font-size: 13px;
			font-weight: 400;
			color: #AAAAAA;
		}

		.info {
			display: block;
			font-size: 12px;
			font-weight: 500;
			color: #325BAF;
			margin-top: 10px;

			span {
				width: 24px;
				height: 20px;
				background-color: #325BAF;
				border-radius: 8px;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				margin-right: 5px;
			}

			.q-img {
				height: 10px;
				width: 10px;
			}
		}

		.amount {
			font-weight: 800;
			line-height: 1em;

			.q-img {
				width: 6.5px;
				height: 12px;
				margin-left: 5px;
			}
		}
	}
</style>