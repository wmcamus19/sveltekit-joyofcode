<script lang="ts">
	import { formatDate } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<hgroup>
	<h1>{data.post.title}</h1>
	<h2>{formatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="content">
	{@html data.post.content}
</div>
