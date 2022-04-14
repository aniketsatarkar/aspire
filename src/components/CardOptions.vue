<template>
	<div class="row option-card">
		<div v-for="(option, index) in options" :key="index" class="col" @click="handleAction(option.action)">
			<div class="option-img">
				<q-img class="cursor-pointer" :src="option.image" />
			</div>
			<div class="option-text">
				<span class="cursor-pointer">{{ option.title }}</span>
			</div>
		</div>
	</div>

	<!-- cancel card  -->
	<q-dialog v-model="showCancelConfirm" persistent>
		<q-card>
		<q-card-section class="row items-center">
			<span class="q-ml-sm">Are you sure, you want to cancel this card?</span>
		</q-card-section>
		<q-card-actions align="right">
			<q-btn flat label="No" color="default" v-close-popup />
			<q-btn flat label="Yes" color="primary" v-close-popup @click="handleCancelCard()"/>
		</q-card-actions>
		</q-card>
	</q-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue';

const options = [
	{
		title: 'Freez Card',
		image: 'img/Freeze_card.svg',
		action: 1,
	},
	{
		title: 'Set spend limit',
		image: 'img/Set_spend_limit.svg',
		action: 2,
	},
	{
		title: 'Add to GPay',
		image: 'img/GPay.svg',
		action: 3,
	},
	{
		title: 'Replace card',
		image: 'img/Replace_card.svg',
		action: 4,
	},
	{
		title: 'Cancel card',
		image: 'img/deactivate_card.svg',
		action: 5,
	},
];

export default defineComponent({
	computed: {
		currentCard () {
			console.log('CURRENT CARD CHANGED!')
			return this.$store.getters['app/getCurrentCard']
		}
	},
	watch: {
		currentCard : {
			handler (card) {
				if (card) {
					this.options[0].title = (card.freez) 
						? 'Unfreez Card'
						: 'Freez Card'
				}
			},
			deep: true,
		},
	},
	setup() {
		return {
			options: ref(options),
			showCancelConfirm: ref(false),
		}
	},
	methods: {
		handleAction (action) {
			switch (action) {
				case 1:
					const card = Object.assign({}, this.currentCard)
					card.freez = !(card.freez)
					this.updateCard(card)
					break
				case 5:
					this.showCancelConfirm = true
					break
			}
		},
		updateCard (card) {
			console.log('## UPDATE CARD : ', card);
			this.$store.dispatch('app/updateCard', card)
		},
		handleCancelCard () {
			this.$store.dispatch('app/cancelCard', this.currentCard);
		}
	}
})
</script>

<style lang="scss" scoped>
	.option-card {
		height: 116px;
		background-color: #EDF3FF;
		padding-top: 1.5em;
		border-radius: 15px;
		margin: 0px 12px 0px 12px;

		.option-img {
			text-align: center;

			.q-img {
				width: 32px;
				height: 32px;
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