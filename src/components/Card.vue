<template>
  <div :class="{'row card-ui': true, 'card-freez': freez}">
		<div class="col-12 text-primary show-card-number">
			<q-img src="img/remove_red_eye-24px.svg" />
			<span style="">Show Card Number</span>
		</div>

		<div class="col-12 card">
			<div class="row">
				<div class="col-12 text-right aspire">
					<q-img src="img/aspire_logo_white.svg" />
				</div>
				<div class="col-12 card-name">{{ name }}</div>
				<div class="col-12 card-number">
					<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span> &nbsp;&nbsp;&nbsp; 
					<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span> &nbsp;&nbsp;&nbsp;
					<span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span> &nbsp;&nbsp;&nbsp;
					<span class="card-number-end">{{ getLastNumber }}</span>
				</div>
				<div class="col-8 card-date">
					<div class="row">
						<div class="col-6 date">
							Thru: {{ thru }}
						</div>
						<div class="col-6 card-cvv">
					 		CVV: <span class="cvv">&nbsp;&nbsp;* * *</span>
						</div>
					</div>
				</div>
				<div class="col-12 text-right card-logo">
					<q-img src="img/Visa_Logo.svg" />
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Card',
	props: {
		index: {
			type: Number,
			default: 0,
		},
		name: {
			type: String,
			default: null,
		},
		cardNumber: {
			type: String,
			default: null,
		},
		freez: {
			type: Boolean,
			default: false,
		},
		thru: {
			type: String,
			default: null
		},
		cardLogo: {
			type: String,
			default: null
		}
	},
	computed: {
		getLastNumber () {
			return this.cardNumber.substring(
				this.cardNumber.length-4,
				this.cardNumber.length
			);
		}
	},
	setup() {
		// ...
	},
})
</script>

<style lang="scss" scoped>
	.card-ui {
		cursor: default;

		.show-card-number {
			text-align: right;
			margin-bottom: 8px;

			.q-img {
				width: 16px;
				height: 16px;
			}

			span {
				font-size: 12px;
				font-weight: 500;
				padding-left: 5px;
				cursor: pointer;
			}
		}

		.card {
			background-color: #01D167;
			border-radius: 10px;

			.aspire {
				padding: 28px;
				.q-img {
					width: 84px; height: 24p;
				}
			}

			.card-name {
				font-size: 24px;
				color: #fff;
				padding-left: 24px;
				font-weight: 500;
			}

			.card-number {
				font-size: 14px;
				color: #fff;
				padding-left:
				24px; margin-top: 15px;

				.card-number-end {
					letter-spacing: 4px;
				}
			}

			.card-date {
				margin-top: 15px;
				.date {
					font-size: 14px;
					color: #fff;
					padding-left: 20px;
					line-height: 34px;
				}
			}

			.card-cvv {
				font-size: 14px;
				color: #fff;
				padding-left: 24px;

				.cvv {
					font-size: 24px;
					vertical-align: middle;
				}
			}

			.card-logo {
				padding-right: 22px;
				padding-bottom: 22px;

				.q-img {
					width: 84px;
					height: 24p;
				}
			}
		}
	}

	.card-freez {
		opacity: 0.7;
	}

	.dot {
		height: 9px;
		width: 9px;
		margin-right: 8px;
		background-color: #fff;
		border-radius: 50%;
		display: inline-block;
	}
</style>