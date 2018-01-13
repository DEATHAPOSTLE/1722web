<template>
	<div class="header">
		<div class="back iconfont">&#xe625;</div>
		<div class="search">
				<span class="iconfont search-icon">&#xe634;</span>
				输入城市/景点/游戏主题	
		</div>
		<div class="city">北京
		<span class="iconfont city-icon">&#xe6bc;</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'index-header'
}
</script>

<style lang="stylus" scoped>
	@import "../../assets/stylus/varibles.styl";
	.header
		display: flex
		height: .88rem
		line-height: .88rem
		background: $bgColor
		color: #fff
		.back
			padding:0 .2rem
		.search
			flex: 1
			border-radius: .1rem
			margin-right: .2rem
			height: .6rem
			line-height: .6rem
			margin-top: .14rem
			background: #fff
			color: #e4e7ea
			padding-left: .4rem
		.search-icon
			position: relative
			right: .2rem 
		.city
			padding-right: .3rem
			position: relative
			.city-icon
				position: relative
				top: .03rem
				
		
			
</style>