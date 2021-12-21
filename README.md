# Vue JS 3 App For Beginners

#### 1. Vue CLI

To install NPM, you just need to install Node.js.

To make sure Node.js is installed on your computer, type the following command in CMD (Command Prompt) or Terminal:

```
node –v
```

```
npm -v
```

Then install Vue CLI by typing the following command in CMD or Terminal:

```
npm install –g @vue/cli
```

type the following command in CMD or Terminal:

```
vue --version
```

#### 2. Creating a new project using Vue CLI


```
vue create vue-project
```

After running the above command, the following options will appear:

? Plesse pick al preset:
  Default ([Vue 2] babel, eslint)
  Defalut (Vue 3 Preview)([Vue 3] babel, eslint)
> Manually Select Features

Select => “Manually select features”.
Then, select “Choose Vue version” and “Babel” then Enter.
Select Vue version 3.x, then Enter so on.
Then Vue CLI will create a new project for you.

If the Installation is complete, then type the following command to enter your project:

```
cd vue-project
```

Then, type the following command to run the project:

```
npm run serve
```

After that, open your browser then visit the following URL:

```
http://localhost:8080/
```

#### 3. Folder Structure

Please delete the HelloWorld.vue component file, because we don't need it, then change the code in App.vue to be like this:

```
<template>
 
</template>
 
<script>
export default {
  name: 'App',
}
</script>
 
<style>
 
</style>
```

#### 4. Data and Methods

Vue.js makes it easy to display data dynamically.

For more details, please type the following code in the "App.vue" file:

```
<template>
  <h2>Name: {{ name }}</h2>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {
      name: "Ajay Sisaudiya",
    };
  },
};
</script>
 
<style>
</style>
```

Then go to the browser, then you will see results like the following:

#### Name Ajay Sisaudiya

You can also change the data via method.

Change the “App.vue” code to the following for more details:

```
<template>
  <h2>Name: {{ name }}</h2>
  <button v-on:click="changeName">Change Name</button>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {
      name: "Ajay Sisaudiya",
    };
  },
  methods: {
    changeName() {
      this.name = "Aaryan Sisaudiya";
    },
  },
};
</script>
 
<style>
</style>
```

The changeName function is called when the “Change Name” button is clicked.

Return to the browser, then click the "Change Name" button.

#### #5. Data Binding


Data binding is an important feature that you must know when building a vue.js application.

You can bind attributes, classes and so on.

For example, here I want to bind the href attribute to the anchor tag.


Change the code "App.vue" to be like this:

```
<template>
  <a v-bind:href="url">GO TO MYSITE.COM</a>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {
      url: "https://mysite.com",
    };
  },
};
</script>
 
<style>
</style>
```

f you look at the code above, there is an <a> tag with the href attribute taking its value from the "url" data property.

You can NOT make it like this:
1
	
<a href="url">GO TO MFIKRI.COM</a>

Or like this:
1
	
<a href="{{ url }}">GO TO MFIKRI.COM</a>

That's why you need data binding. By utilizing data binding, you can make attributes or classes dynamic.

  ### #6. Two-Way Data Binding
  
  



