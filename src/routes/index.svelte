<script context="module">


let ftch = null;

	export async function load({ fetch }) {
		ftch = fetch;
		console.log("fetching with style "+selected);		
	  const res = await ftch(`/api?style=${selected}`);
  
	if (res.ok) return { props: { users: await res.json() } };
	return {
	  status: res.status,
	  error: new Error()
	 };
	}

	async function changeStyle() {	  
		console.log("CHANGE STYLE "+selected)
	   const usrs  = await load({fetch:ftch});	  
	   users = usrs.props.users;
	}

	let selected = "open-peeps";

  </script>
  
  <script>
	export let users;
  </script>
  
  <main>
	<select bind:value={selected} on:change={() => changeStyle()}>
		<option value="adeventurer">Adventurer</option>
		<option value="avataaars">avataaars</option>
		<option value="big-ears">big-ears</option>
		<option value="big-smile">big-smile</option> 
		<option value="croodles">croodles</option> 
		<option value="bottts">bottts</option> 
		<option value="initials">initials</option> 
		<option value="micah">micah</option> 
		<option value="open-peeps">open-peeps</option> 
	</select>
	<br>

	{#each users as { avatar, lastName }}
	<!-- sveltekit:prefetch -->
	<a sveltekit:prefetch href={`/${lastName}`} class="box">
	  <img src={avatar} alt={lastName} />
	  <h2>{lastName}</h2>
	</a>
	{/each}
  </main>
  
  <style>
	main {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	}
	.box {
	padding: 0.25rem;
	margin: 1.5rem;
	color: salmon;
	box-shadow: 4px 5px 11px 2px lightgray;
	}
	.box:hover {
	box-shadow: 4px 5px 11px 10px lightgray;
	}
	img {
	width: 15rem;
	object-fit: contain;
	}
  </style>