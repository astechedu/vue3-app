
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbipsgJApYCjDBWjgMdzi2dRMzKWkZ7XXMhVV0ieK2KKKcEDpkpYgJRkO0spNVHzW_wf0&usqp=CAU">
# Vue JS 3 App For Beginners
### Read this document carefully and try to make api using vue js 3

### Steps:
	1. Vue CLI
	2. Creating a new project using Vue CLI
	3. Folder Structure
	4. Data and Methods
	5. Data Binding
	6. Two-Way Data Binding
	7. Conditionals and Loops  
	8. Lifecycle Hooks
	9. Computed Properties
	10. Components
 	11. Props
 	12. Custom Events
 	13. Vue Router

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
there are 3 folders, namely: node_modules, public, and src folders.
The node_modules folder contains all the modules needed to build the project.

The public folder contains index.html and favicon.ico files, index.html files represent Single Page Application (SPA).
The src folder contains the App.vue, main.js, assets folder, and components folder.
The App.vue file is the root component file of the vue js application, the main.js file is the entry point.

The assets folder is a folder that contains images or other resources needed to build applications.

While the components folder is a folder that will contain all the components needed to build the application.
By default, there is one component which is HelloWorld.vue.

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
        { id: 1, title: "Product 1", price: 6000 },
        { id: 2, title: "Product 2", price: 5500 },
        { id: 3, title: "Product 3", price: 4700 },
        { id: 4, title: "Product 4", price: 1300 },
	{ id: 5, title: "Product 5", price: 1000 },
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
	
#### #8. Lifecycle Hooks
	
One of the very important things for you to know in vue.js is lifecycle hooks.

Lifecycle hooks are a window into how the library you are using works behind the scenes. Lifecycle hooks let you know when your component was created, added to the DOM, updated, or destroyed.

There are many lifecycle hooks in vue.js such as created, beforeCreate, mounted, beforeMount, updated, beforeUpdate, and others.

In this tutorial, I will only utilize one lifecycle hook which is: created.

Lifecycle hooks “created” are lifecycle hooks that are first executed after initializing the component and allow you to access reactive data and events before the template and Virtual DOM are mounted and rendered.

It may look confusing, but it's really not.

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
      products: [],
    };
  },
  // Created Lifecycle hooks
  created() {
    this.products = [
        { id: 1, title: "Product 1", price: 6000 },
        { id: 2, title: "Product 2", price: 5500 },
        { id: 3, title: "Product 3", price: 4700 },
        { id: 4, title: "Product 4", price: 1300 },
	{ id: 5, title: "Product 5", price: 1000 },
    ];
  },
};
</script>
 
<style>
</style>
```
	
In the code above, it can be seen that in the data property there are products with an empty array.

Meanwhile the data is moved to the lifecycle hooks created. This works so that the data is loaded before the Virtual DOM is rendered to the DOM.

If you want to run a function that was before the Virtual DOM rendered, then you can put that function into the lifecycle hooks created.
	
Go to the browser, then everything is still as before.
	
#### 9. Computed Properties
	
Computed property is a property that you can use to define data whose value depends on other data.

For example, suppose you want to display data based on certain keywords such as search.

For more details, change the code "App.vue" to be like this:
	
```
<template>
  <!-- input search box -->
  <input type="text" v-model="search" placeholder="Search..." />
  <ul>
    <!-- loop data from Computed Properties filterProducts -->
    <li v-for="product in filterProducts" v-bind:key="product.id">
      {{ product.title }} - {{ product.price }}
    </li>
  </ul>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {
      search: "",
      products: [],
    };
  },
  // Created Lifecycle hooks
  created() {
    this.products = [
        { id: 1, title: "Product 1", price: 6000 },
        { id: 2, title: "Product 2", price: 5500 },
        { id: 3, title: "Product 3", price: 4700 },
        { id: 4, title: "Product 4", price: 1300 },
	{ id: 5, title: "Product 5", price: 1000 },
    ];
  },
  // Computed Properties
  computed: {
    filterProducts() {
      // filter product from array
      return this.products.filter((product) => {
        // Return title = search
        return product.title.match(this.search);
      });
    },
  },
};
</script>
 
<style>
</style>
```

In the code above, it can be seen that there is one text input that functions for searching.

In the logic there is a computed property in which there is one function, namely: filterProducts.

The filterProducts function serves to search data based on the same title as keywords from input text.

Back to the browser, if it runs well, it will look like the following image:
	
If you want to define data whose value depends on other data, then you can use the computed property.
	
#### 10. Components
	
One of the important concepts you should know in vue.js is components.

Vue.js is often used to build Single Page Application (SPA) with multiple components.

For more details, create a component file named “Header.vue” in the “src/components” folder.

Then type the following code:	
	
```
<template>
  <h2>Hello World</h2>
</template>
 
<script>
export default {
  name: "Header",
};
</script>
 
<style>
</style>
```
	
After that, change the code "App.vue" to be like this:
	
```
<template>
  <!-- Output Header Component -->
  <Header />
</template>
 
<script>
// Import Header Component
import Header from "./components/Header";
 
export default {
  name: "App",
  // Define Header Component in components Property
  components: {
    Header,
  },
};
</script>
 
<style>
</style>
```
	
In the code above it can be seen that to be able to use the "Header" component, you need to import the component file, then register the component in the Components Property, after that you can output the component to the DOM.  

Back to the browser, if it runs well, it will look like the following image:
	
	
#### 11. Props

Props function to send data or values from Parent Components to child components.

For example, change the code “App.vue” to be like this:
	
```
<template>
  <!-- Bind Props in Header Component -->
  <Header v-bind:TextHeader="text" />
</template>
 
<script>
// Import Header Component
import Header from "./components/Header";
 
export default {
  name: "App",
  components: {
    Header,
  },
  // Data Property
  data() {
    return {
      text: "Welcome To AJAY SISAUDIYA",
    };
  },
};
</script>
 
<style>
</style>
```
	
Then change the code "Header.vue" in the "src/components" folder to be as follows:
	
	
```
<template>
  <!-- Output Header -->
  <h2>{{ TextHeader }}</h2>
</template>
 
<script>
export default {
  name: "Header",
  // Props Property
  props: ["TextHeader"],
};
</script>
 
<style>
</style>
```
	
In the code above, you can see that there are property props that accept the TextHeader value that comes from the parent component, namely "App.vue".

Back to the browser, if it runs well, it will look like the following image:
	
#### 12. Custom Events

Unlike props, custom events function to send data from child components to parent components..

For example, change the code “Header.vue” in the “src/components” folder to be as follows:	

```
<template>
  <!-- Output Header Components -->
  <h2>{{ TextHeader }}</h2>
  <button v-on:click="changeText">Change Title</button>
</template>
 
<script>
export default {
  name: "Header",
  // Props Property
  props: ["TextHeader"],
  // Data Property
  data() {
    return {
      text: "Welcome To The Home",
    };
  },
  // Methods Property
  methods: {
    changeText() {
      this.$emit("changeTitle", this.text);
    },
  },
  // Emits Property
  emits: ["changeTitle"],
};
</script>
 
<style>
</style>
```
	
Then, change the code "App.vue" to be like this:
	
```
<template>
  <!-- Output Header Component -->
  <Header @changeTitle="changeTitle" v-bind:TextHeader="text" />
</template>
 
<script>
// Import Header Component
import Header from "./components/Header";
 
export default {
  name: "App",
  components: {
    Header,
  },
  // Data Property
  data() {
    return {
      text: "Welcome To M Fikri",
    };
  },
  // Methods Property
  methods: {
    changeTitle(newTitle) {
      this.text = newTitle;
    },
  },
};
</script>
 
<style>
</style>	
```
	
The code above serves to change the header text from "Welcome to Ajay Sisaudiya" to "Welcome To The Home".

Where the text "Welcome To The Home" comes from child components.

Back to the browser, then click the "Change Title" button.
	
Gp to browser: 
If it goes well, then the header text will change to "Welcome To The Home" as shown 
	
#### 13. Vue Router	
	
Vue Router serves to render specific components with specific URLs.

In contrast to multiple page applications, vue routers do not make requests to the server, but instead render certain components on the client side.

To use Vue Router on vue.js using Vue CLI can be done easily by creating a new project.

Therefore, create a new vue.js project with the following command in CMD (Command Prompt) or terminal:
	
```
vue create vue-router-project
```

"vue-router-project” is the name of the project to be created.
	
If you created it in a different folder, you can use the CD (Change Directory) command to go to your folder.
	
After running the above command, the following options will appear:
	
1. Select => “Manually select features”.
2. Then, select “Choose Vue version, Babel, and Router” then Enter.
3. Select Vue version 3.x, then Enter

If the installation is complete, open the "vue-router-project" project then you will find a folder structure
	
	
In the picture above, there are additional 2 folders in the "src" folder, namely: "router" and "views".

In the "router" folder there is an "index.js" file which functions to control all routes from the project being built.

While in the "views" folder there are "Home.vue" and "About.vue" files that function for the display or page you want to use on the route.

To make sure all projects run well, run the project by typing the following command in the terminal:
	
	
```
npm run serve
```
	
Then go back to the browser, and visit the following URL:
http://localhost:8080/
http://localhost:8080/about
	
For example, create a “Contact.vue” file in the “src/views” folder, then type the following code:
	
```
<template>
  <div class="about">
    <h1>This is an contact page</h1>
  </div>
</template>
```
	
Then change the code in the “index.js” file in the “src/router” folder to be as follows:
	
	
```
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
 
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]
 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
 
export default router	
```	
	
	
After that, change the code in the "App.vue" file to be like this:
	
	
```
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view />
</template>
 
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c4e60;
}
 
#nav {
  padding: 32px;
}
 
#nav a {
  font-weight: bold;
  color: #7c2e83;
}
 
#nav a.router-link-exact-active {
  color: #16b894;
}
</style>
```
Return to the browser, then click the “Contact” menu or visit the following URL:
	
http://localhost:8080/contact	
	
	
#### Conclusion:

The discussion this time is about the Vue.js 3 tutorial for beginners.

Now, you have learned about what vue.js is, why to use vue.js, Vue CLI, to Vue Router.	

Thanks to all	
:+1:	

![](https://avatars.githubusercontent.com/u/75734516?s=48&v=4) 
