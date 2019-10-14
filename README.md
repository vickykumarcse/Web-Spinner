# Web Spinner

This project is based on Web Components, for Spinner or Loader. It is very simple to use as well as customizable.
<br/>
### [Live Demo](https://webmultilangsupport.vickykumarcse.now.sh?loading=true)


## Installation
Use the package manager npm to install web-spinner.

```bash
npm install web-spinner

Include "/node_modules/web-spinner/dist/web-spinner.js" in your HTML File or in angular.json file.

```
### CDN Link
[https://unpkg.com/web-spinner@1.1.1/dist/web-spinner.js](https://unpkg.com/web-spinner@1.1.1/dist/web-spinner.js)
<br/>Now you can easily include the script tag in your html file.

```bash
<script src="https://unpkg.com/web-spinner@1.1.1/dist/web-spinner.js"></script>
```


## Usage

1. Default Spinner shown.
```
<web-spinner loading="true"></web-spinner>
```

2. Default Spinner hidden.
```
<web-spinner></web-spinner>
or 
<web-spinner loading="false"></web-spinner>
```
3. Advanced Spinner with Color customization.
```
<web-spinner loading="true" color="purple"></web-spinner>
```
4. Advanced Spinner with Size of Spinner customization.
```
<web-spinner loading="true" color="purple" size="50"></web-spinner>
 size: 25 to 100
```
5. Advanced Spinner with Position of the Overlay customization.
```
<web-spinner loading="true" color="purple" size="50" position="600, 700, 50, 50"></web-spinner>
 position: width, height, top, left
 width: 500 to 1500
 height: 500 t0 1500
 top: 0 to 1000
 left: 0 to 1000
```

## Authors

* **Vicky Kumar** - [Vicky Kumar - GitHub](https://github.com/vickykumarcse)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
