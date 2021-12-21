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

##### Name Ajay Sisaudiya

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

#### 5. Data Binding


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

If you look at the code above, there is an <a> tag with the href attribute taking its value from the "url" data property.

You can NOT make it like this:
	
<a href="url">GO TO MYSITE.COM</a>

Or like this:
	
<a href="{{ url }}">GO TO MYSITE.COM</a>

That's why you need data binding. By utilizing data binding, you can make attributes or classes dynamic.

#### 6. Two-Way Data Binding
  
Vue provides a two-way data binding feature that functions to retrieve values from form inputs.

Different from retrieving values from conventional form inputs, two-way data binding applies both ways.
	
For more details, change the code "App.vue" to be like this:

```
<template>
  <input type="text" v-model="name" />
  <h4>Name: {{ name }}</h4>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
    };
  },
};
</script>
 
<style>
</style>
```
	
	
In the code above there is one input text with two-way data binding attribute, namely: "v-model".

In the data property there is a name with an empty string for the default value.
	
Back to the browser, if it runs well, it will look like the following image:
	
#### 7. Conditionals and Loops

You can use if conditions with the "v-if" directive, and you can also loop using the "v-for" directive in vue.js.
	
For more details, change the code "App.vue" to be like this:
	
	
For more details, change the code "App.vue" to be like this:
	
```
<template>
  <!-- if data exist -->
  <div v-if="products.length">
    <ul>
      <!-- loop data -->
      <li v-for="product in products" v-bind:key="product.id">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
  <!-- if no data -->
  <div v-else>
    <p>No Data</p>
  </div>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {
      products: [
        { id: 1, title: "Product 1", price: 5000 },
        { id: 2, title: "Product 2", price: 4500 },
        { id: 3, title: "Product 3", price: 3700 },
        { id: 4, title: "Product 4", price: 1200 },
      ],
    };
  },
};
</script>
 
<style>
</style>
```

In the code above, you can see that we use "v-if" and "v-for" together.
		
Go back to the browser to make sure there are no errors.
	

	
	
	


