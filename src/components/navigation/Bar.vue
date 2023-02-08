<script setup>
  import NavLink from './Link.vue'
  import DocumentationIcon from '../icons/IconDocumentation.vue'
</script>

<template>
    <router-link to="/">
        <NavLink class="nav-link">
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>Home</template>
            Features
        </NavLink>
    </router-link>

    <router-link to="/math">
        <NavLink class="nav-link">
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>Math</template>
            Simple Math, 2D & 3D Geometry, Statistic
        </NavLink>
    </router-link>

    <router-link to="/others">
        <NavLink class="nav-link">
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>Others</template>
            Random Picker
        </NavLink>
    </router-link>

    <router-link to="/physics">
        <NavLink class="nav-link">
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>Physics</template>
            Temperature, Speed
        </NavLink>
    </router-link>

    <router-link to="/about">
        <NavLink class="nav-link">
        <template #icon>
            <DocumentationIcon />
        </template>
        <template #heading>About</template>
            About App, About Me
        </NavLink>
    </router-link>
</template>