

**1. What is Vue.js?**


**2. How does Vue.js differ from other frameworks like React and Angular?**
- lightweight compared to Angular,
- easier to learn and use.
- simpler syntax.
- Reactive Data Binding: 
- Component-Based Architecture: 
- Vue CLI:
- Directives:
- Virtual DOM:
- Transition and Animation:
- Routing with Vue Router:
- State Management with Vuex:
- Devtools:
- Scoped CSS:



**0. What is the Vue instance?**
- is the root of a Vue application. 
- It serves as the entry point for a Vue component. 




**3. What are watchers in Vue.js?**
- Allow you to watch for changes on a specific property and perform custom logic when that property changes.
- used when you need to perform asynchronous operations based on data changes.

- Immediate: true ( Eager Watchers ) => watch is lazy by default, it is immediately executed when the watcher is created, even before any data changes.

    watch: {
        question: {
          handler(newQuestion) {
            // this will be run immediately on component creation.
          },
          // force eager callback execution
          immediate: true
        }
      }

        watch(source, (newValue, oldValue) => {
          
        }, { immediate: true })

- deep:true => It is used to perform deep object property watching. Which means it will react to changes in nested properties of objects.

          watch: {
        someDeepProperty: {
          handler(newValue, oldValue) {
            // This function will run when any nested property changes within someDeepProperty
          },
          deep: true
        }
      }

          watch(source, (newValue, oldValue) => {

          }, { deep : true })

- flush: 'post'=>If you want to access the DOM in a watcher callback after Vue has updated it, you need to specify the flush: 'post'


**4. What is the purpose of the Vue router?**
- The Vue router is a routing library for Vue.js 
- that allows you to create single-page applications with multiple views. 
- It enables navigation between different components without full page reloads.




**5. What is the purpose of the Vue template?**
- using template define the structure of your component's markup.
- It allows you to mix HTML with Vue directives and expressions to create dynamic and reactive components.





**6. What is a Vue component?**
- Vue component is combination of html css and javascript logic.
- we use reusability, and maintainability.




**7. How does Vue.js support form input validation?**
- Vue.js provides a built-in form input validation mechanism through the v-model directive, along with the use of HTML5 validation attributes like required, min, max, etc. Additionally, you can define custom validation logic using computed properties or methods.  



**8. Explain Vue.js single-file components (SFC).**
- Combination of HTML, JavaScript, and CSS code, all in a single file.
- They encapsulate the template, script, and style of a component.
- easy to manage and reuse components.



**9. How can you handle user input and events in Vue.js?**
Vue.js provides the v-on directive to handle user input and events. By attaching v-on to an element, you can listen to a specific event (e.g., click, keyup) and trigger a method or expression in response.




**10. How can you optimize the performance of a Vue.js application?**
- minimize unnecessary re-rendering.
- lazy-loading components.
- code splitting. 
- remove unnecessary watchers.




**11. Explain the concept of Vue.js mixins** 
- reusable code blocks.
- used to reduce same code. 
- allow you to share functionality, computed properties, methods, and lifecycle hooks among different components.




**12. How can you handle asynchronous operations in Vue.js?**
- Promises or async/await within methods or computed properties.
- Using lifecycle hooks 
- Using Axios for Http requests.




**13. What are slots in Vue.js?**
- Template that allow you to insert content from the parent component.
- They provide a way to create flexible and reusable components.



**14. What is the purpose of the Vue.js transition component?**
The Vue.js transition component enables you to add animations and transitions to elements when they are inserted, updated, or removed from the DOM. It allows you to create smooth and visually appealing effects during component transitions.




**15. Explain the concept of dynamic components in Vue.js.**
- Allows dynamically switch between multiple components based on a condition 
- By using v-if, v-else, v-show.



**16. What is the purpose of the Vue.js ref attribute?**
- Allows you to get a reference to a specific element.
- Useful when you need to DOM directly.



**17. How can you handle errors or exceptions in Vue.js?**
- try catch



**18. Explain the concept of Vue.js plugins.**
- we can install multiple packages for adding additional features, directives, components,
- eg Vue router, vuex.




**19. What is the purpose of the Vue.js nextTick method?**
- This method will run after the DOM has been updated.
- You can safely access updated DOM elements or components
- and perform additional tasks after the reactivity cycle.
- For example, you can access DOM elements using refs




**20. Explain the concept of scoped styles in Vue.js.**
- Allows you to style specific component.
- Have to add scoped tag in style.
    



**21. What is the purpose of the vue-cli (Vue Command Line Interface)?**
- Command line tool to create basic structure of files for vue.js.
- Provides efficient way to set up project templates, manage dependencies.




**22. Explain the concept of server-side rendering (SSR) in Vue.js.**
- Allows you to render Vue components on the server and send the pre-rendered HTML to the client.
- improves initial page load performance.
- Improves search engine optimization (SEO) 





**23. How can you handle route-based code splitting in Vue.js applications?**
Route-based code splitting in Vue.js involves dynamically loading components or modules based on the specific route that the user navigates to. This can be achieved using dynamic imports with webpack's code splitting feature or by utilizing Vue Router's lazy-loading feature.




**24. What are the differences between Vue.js 2.x and Vue.js 3.x?**
- Improved performance 
- Smaller bundle size.
- Introduces a Composition API.
    



**25. How can you handle internationalization (i18n) in Vue.js applications?**
In Vue.js, you can handle internationalization by utilizing i18n libraries like vue-i18n. These libraries provide mechanisms for defining and managing multiple language translations, handling dynamic content translation, and supporting language switching within your Vue.js applications.



**26. Explain the concept of Vue.js render functions.**
Vue.js render functions allow you to programmatically generate the DOM structure and content of a component instead of using templates. Render functions give you fine-grained control over the rendering process and are particularly useful when building reusable components or implementing complex dynamic rendering logic.



**27. Two way data binding.**
- keeps the UI and data model synchronized.
- When the user interacts with the UI, the data model is updated automatically. 
- changes to the data model are reflected instantly in the UI.


#################

**1. Computed :**
Computed properties are functions defined in a Vue component that are used to calculate and return a value based on the component's data. They are reactive and automatically update whenever their dependent data changes.

<script>
   export default {
   data() {
    return {
      message: 'Hello Vue.js',
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
};
</script>

**2. Directives**
   Directives are dynamic attributes that you can add in to the html to use dynamic data.
   directives starts with v- prefix.
   vue js provides multiple build-in directives and u can create custom directives also.

   eg. v-bind, v-for, v-if, v-show

**3. Custom directives:**

Custom directives allow you to extend the functionality of Vue by defining your own directives that can be used in templates.

<template>
    <input v-focus/>
</template>
<script>

  const vFocus = {
    mounted: (el) => el.focus()
  }

export default {
      name: 'HelloWorld',
      directives: {
         focus: vFocus
      },
</script>

4. Component Communication:

examples of component communication in Vue.js 3 using.
        props
        events
        provide/inject,
        and the Composition API

Props Example:
ParentComponent.vue:
<template>
  <div>
    <ChildComponent :message="parentMessage" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: 'Hello from parent!',
    };
  },
};
</script>
ChildComponent.vue:

html
Copy code
<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>

Events Example:
ChildComponent.vue:

html
Copy code
<template>
  <div>
    <button @click="emitEvent">Click Me!</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitEvent() {
      this.$emit('custom-event', 'Event payload');
    },
  },
};
</script>
ParentComponent.vue:

html
Copy code
<template>
  <div>
    <ChildComponent @custom-event="handleEvent"/>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';


export default {
  components: {
    ChildComponent,
  },
  methods: {
    handleEvent(payload) {
      console.log(payload); // Output: "Event payload"
    },
  },
};
</script>
In this example, The ChildComponent emits a custom event called custom-event when the button is clicked. The ParentComponent listens to this event and handles it with the handleEvent method.

**Provide/Inject Example:**
ParentComponent.vue:

html
Copy code
<template>
  <div>
    <p>{{ sharedData }}</p>
    <ChildComponent />
  </div>
</template>

<script>
import { provide } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      sharedData: 'Shared data',
    };
  },
  setup() {
    provide('sharedData', 'Shared data');
  },
};
</script>
ChildComponent.vue:

html
Copy code
<template>
  <div>
    <p>{{ injectedData }}</p>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const injectedData = inject('sharedData');
    return {
      injectedData,
    };
  },
};
</script>
In this example, the ParentComponent provides the sharedData value using the provide function. The ChildComponent injects the sharedData value using the inject function and uses it in its template.

Composition API Example:
ParentComponent.vue:

html
Copy code
<template>
  <div>
    <p>{{ sharedValue }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const sharedValue = ref(0);
    const increment = () => {
      sharedValue.value++;
    };
    return {
      sharedValue,
      increment,
    };
  },
};
</script>

**5. how vue is diff than other frameworks:**

Vue.js known simplicity, flexibility,experience.
1. Easy to Learn:
2. Fast and Lightweight:
3. Component-Based: Vue.js follows a component-based approach, which means applications are built by combining reusable components. 
4. Two-Way Data Binding: Vue.js has a feature called two-way data binding. This means that when you make changes to the user interface, the underlying data is      automatically updated, and vice versa.
5. Routing and State Management: Vue.js includes official solutions for routing (Vue Router) and state management (Vuex). These features help developers handle navigation between pages and manage application data more efficiently.




**7.vue life cycle:**

 creation Phase: 
  beforeCreate() {

     triggered before the Vue instance is created.
  },
  created() {

     triggered after the Vue instance is created.
     props available in this phase.

  },

 Mounting Phase: 
  beforeMount() {

     triggered before the Vue instance's template is rendered and mounted to the DOM.

  },
  mounted() {

    triggered after the Vue instance's template is rendered and mounted to the DOM.

  },
 Updating Phase:

  beforeUpdate() {

    triggered when data changes but before the virtual DOM re-renders and applies the changes to the actual DOM.

  },
  updated() {

     This hook is triggered after the virtual DOM has re-rendered and applied the changes to the actual DOM.

  },
 Unmounting Phase: 
  beforeUnmount() {   

    triggered before the Vue instance is destroyed 
  },
  unmounted() { 

     after the Vue instance has been destroyed,
  },

**8. conditional rerendering;**
    v-if v-else.
    v-show : element remains into DOM. it toggles display property.







    As of my last update in September 2021, Vue.js does not have built-in support for pipes like Angular does. However, Vue.js offers a similar concept called "filters" that allows you to format and manipulate data in templates. Filters are useful for applying transformations to the output of expressions in the template.

To use filters in Vue.js, you can define them locally within a Vue component or globally across your entire application. Here's how you can define a filter and use it in Vue.js:

1. **Defining a Local Filter:**
   You can define a filter in the `filters` option of your Vue component:

```vue
<template>
  <div>
    {{ message | capitalize }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello world'
    };
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>


In this example, we've defined a `capitalize` filter that capitalizes the first letter of the input string.

2. **Using Global Filters:**
   If you want to use a filter across multiple components in your application, you can define a global filter using the `Vue.filter` method:

javascript
// main.js or any other entry point of your Vue application
import Vue from 'vue';

Vue.filter('capitalize', function(value) {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
});
```

After registering the global filter, you can use it in any component template without explicitly defining it in the `filters` option:

```vue
<template>
  <div>
    {{ message | capitalize }} 
  </div>
</template>
```

Please note that Vue 3 (and newer) introduced the Composition API, and filters were not included in Vue 3 to promote using the Composition API for such transformations. Instead, you can achieve similar functionality using regular functions, methods, or computed properties within your components.

Keep in mind that Vue.js evolves over time, and new features or changes might have been introduced after my last update. It's always a good idea to check the official Vue.js documentation or release notes for the latest information.

# watcheffect

https://vuejs.org/guide/essentials/watchers.html#watcheffect

4003373023

