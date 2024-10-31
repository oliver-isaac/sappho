![ParachutesAI](static/sappho.png)

# sappho

📃 Flexible global rune-based state management for Svelte 5+

Usage:

Define your stores:

```typescript
import { reader, writer } from 'sappho';

export const poemStore = writer<string>(
	"Parisian whiskers Prowls Montmartre's cobblestones Seine reflects moonlight"
);
export const readableOnlyPoemStore = reader(poemStore);
```

Usage in svelte files:

```svelte
<script lang="ts">
	import { poemStore } from '$lib/stores/poemStore';

	let poem = poemStore;

	function handleClick() {
		poem.state = '';
	}
</script>

<div class="mt-40 text-black text-3xl">{poem.state}</div>
<input bind:value={poem.state} />
<button onclick={handleClick}>Clear Poem</button>
```
