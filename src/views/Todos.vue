<template>
  <div>
    <h1>Todos</h1>
    <div>
      <input type="text" v-model="newTodo" />
      <button @click="addTodo">Add</button>
    </div>
    <br />
    <div v-for="item in todos" :key="item.id">
      <span>#{{ item.id }} / {{ item.title }} / </span>
      <span @click="toggleTodo(item)">{{ item.completed ? 'DONE' : 'TODO' }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const newTodo = ref('')
const todos = reactive([])

const addTodo = () => {
  const result = {
    id: todos.length + 1,
    title: newTodo.value,
    completed: false
  }
  todos.push(result)
  clear()
}

const clear = () => {
  newTodo.value = ''
}

const toggleTodo = (item) => {
  item.completed = !item.completed
}
</script>

<style scoped>

</style>
