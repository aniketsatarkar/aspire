<template>
    <div class="row option-card">
		<div v-for="(option, index) in options" :key="index" class="col">
			<div class="option-img">
				<q-img class="cursor-pointer" :src="option.image" />
			</div>
			<div class="option-text">
				<span class="cursor-pointer">{{ option.title }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'

const options = [
	{
		title: 'Home',
		image: 'img/Logo_1.svg',
	},
	{
		title: 'Cards',
		image: 'img/pay.svg',
	},
	{
		title: 'Payments',
		image: 'img/Payments.svg',
	},
	{
		title: 'Credit',
		image: 'img/Credit.svg',
	},
	{
		title: 'Profile',
		image: 'img/Account.svg',
	},
];

export default defineComponent({
    setup() {
        return {
            options: ref(options),
        }
    },
})
</script>

<style lang="scss" scoped>
	.option-card {
		padding: 10px 0px 10px 0px;
		margin: 0px;
        box-shadow: 0px 0px 8px 0px #00000014;
        background-color: white;

		.option-img {
			text-align: center;

			.q-img {
				width: 24px;
				// height: 24px;
				margin: auto;
				display: block;
			}
		}

		.option-text {
			text-align: -webkit-center;
			margin-top: 5px;

            span {
                word-break: break-word;
                width: 65px;
                display: block;
            }
		}
	}
</style>