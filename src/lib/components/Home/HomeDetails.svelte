<span class="home-details">
	<slot />
</span>

<style>
	.home-details {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		width: 220px; /** FIXME value */
		height: 377px; /** FIXME value */
		padding: 37px;

		border: 1px solid #ffffff;
		border-radius: 200px; /** FIXME value */
		box-sizing: border-box;

		color: #ffffff;
		overflow: hidden;
	}
</style>
