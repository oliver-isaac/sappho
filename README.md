![ParachutesAI](static/sappho.png)

# sappho

📃 Flexible global rune-based state management for Svelte 5+

Usage:

Define your stores:

```typescript
import { reader, writer, persister } from 'sappho';

export const poemStore = writer<string>(
	"Parisian whiskers Prowls Montmartre's cobblestones Seine reflects moonlight"
);
export const readableOnlyPoemStore = reader(poemStore);

export const persistedPoemStore = persister<string>('Storage Key', 'Your content here');
```

Usage in svelte files:

```svelte
<script lang="ts">
	import { poemStore, persistedPoemStore } from '$lib/stores/poemStore';

	let poem = poemStore;
	let persistedPoem = persistedPoemStore;

	function handleClick() {
		poem.state = '';
		persistedPoem.state = '';
	}
</script>

<div class="mt-40 text-black text-3xl">{poem.state}</div>
<div class="mt-40 text-black text-3xl">{persistedPoem.state}</div>
<input bind:value={poem.state} />
<input bind:value={persistedPoem.state} />
<button onclick={handleClick}>Clear Poem</button>
```

TODO:

- Add better derived stores
