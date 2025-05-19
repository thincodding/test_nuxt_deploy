<template>

    <div>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/test">About</NuxtLink>
                </li>

                <li>
                    <NuxtLink to="/contact">Contact</NuxtLink>
                </li>
             
            </ul>
        </nav>

        <div>
            <slot />
        </div>

    </div>
</template>