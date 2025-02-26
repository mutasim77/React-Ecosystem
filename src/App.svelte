<script lang="ts">
    import { data } from "./data";
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    let activeCategory = 1;
    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    function setCategory(id: number) {
        activeCategory = id;
    }
</script>

<main>
    <header>
        <h1>React<span class="galaxy-text">Galaxy</span><span class="star">✨</span>
        </h1>
        <p>A curated collection of React resources. Explore and enjoy!</p>
        <a
            href="https://github.com/mutasim77/React-Ecosystem"
            class="contribute-link">Contribute on GitHub</a
        >
    </header>

    <div class="container">
        <nav>
            {#each data as category (category.id)}
                <button
                    class:active={activeCategory === category.id}
                    on:click={() => setCategory(category.id)}
                >
                    {category.title}
                </button>
            {/each}
        </nav>

        <section>
            {#each data.filter((c) => c.id === activeCategory) as category}
                {#if mounted}
                    <div class="resources" transition:fade={{ duration: 200 }}>
                        {#each category.links as link (link.id)}
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>{link.name}</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                >
                                    <path
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    ></path>
                                    <polyline points="15 3 21 3 21 9"
                                    ></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        {/each}
                    </div>
                {:else}
                    <div class="resources">
                        {#each category.links as link (link.id)}
                            <a
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>{link.name}</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="16"
                                    height="16"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    fill="none"
                                >
                                    <path
                                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                    ></path>
                                    <polyline points="15 3 21 3 21 9"
                                    ></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        {/each}
                    </div>
                {/if}
            {/each}
        </section>
    </div>

    <footer>
        <p>
            Made with <span class="heart">♥</span> by
            <a href="https://mutasim.top" target="_blank">Mu</a>
        </p>
    </footer>
</main>

<style>
    :global(body) {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 500;
        background: #111;
        color: #eee;
    }

    main {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 20px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    header {
        padding: 40px 0 30px;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        margin: 0;
        font-weight: 800;
        display: inline-block;
    }

    .galaxy-text {
        background: linear-gradient(90deg, #f43f5e, #ec4899);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .star {
        display: inline-block;
        color: #f43f5e;
        animation: twinkle 1.5s ease-in-out infinite alternate;
        margin-left: 5px;
    }

    @keyframes twinkle {
        0% {
            opacity: 0.6;
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1.1);
        }
    }

    header p {
        margin: 15px 0 20px;
        color: #aaa;
        font-size: 1rem;
    }

    .contribute-link {
        color: #f43f5e;
        font-size: 0.9rem;
        text-decoration: none;
        border-bottom: 1px dotted #f43f5e;
        transition: opacity 0.2s;
    }

    .contribute-link:hover {
        opacity: 0.8;
    }

    .container {
        display: flex;
        gap: 30px;
        margin-bottom: 40px;
        flex: 1;
    }

    nav {
        width: 200px;
        flex-shrink: 0;
        position: sticky;
        top: 20px;
        align-self: flex-start;
    }

    nav button {
        display: block;
        width: 100%;
        text-align: left;
        background: none;
        border: none;
        color: #999;
        padding: 12px 15px;
        margin-bottom: 5px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
        transition: all 0.1s;
    }

    nav button:hover {
        color: #fff;
        background: rgba(244, 63, 94, 0.1);
    }

    nav button.active {
        background: rgba(244, 63, 94, 0.15);
        color: #f43f5e;
        font-weight: 600;
    }

    section {
        flex: 1;
    }

    .resources {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
    }

    .resources a {
        background: #1a1a1a;
        color: #fff;
        border-radius: 6px;
        padding: 16px;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #333;
        transition:
            transform 0.15s,
            border-color 0.15s;
    }

    .resources a:hover {
        border-color: #f43f5e;
        transform: translateY(-2px);
    }

    .resources a span {
        font-weight: 500;
    }

    .resources a svg {
        color: #f43f5e;
    }

    footer {
        text-align: center;
        padding: 20px 0 30px;
        color: #777;
        font-size: 0.9rem;
    }

    .heart {
        color: #f43f5e;
        display: inline-block;
        animation: pulse 1.5s ease infinite;
    }

    footer a {
        color: #aaa;
        text-decoration: none;
        border-bottom: 1px dotted #555;
    }

    footer a:hover {
        color: #f43f5e;
        border-color: #f43f5e;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.3);
        }
        100% {
            transform: scale(1);
        }
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
        }

        nav {
            width: 100%;
            position: relative;
            top: 0;
            display: flex;
            overflow-x: auto;
            padding-bottom: 15px;
            scrollbar-width: none;
        }

        nav::-webkit-scrollbar {
            display: none;
        }

        nav button {
            flex: 0 0 auto;
            white-space: nowrap;
            margin-right: 10px;
            margin-bottom: 0;
        }

        .resources {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 2rem;
        }

        header {
            padding: 30px 0 20px;
        }

        .resources a {
            padding: 14px;
        }
    }
</style>
