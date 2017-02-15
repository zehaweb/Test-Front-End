function ExampleDirective() {

  return {
    restrict: 'EA',
    link: function(scope, element) {
      element.fancybox();
    }
  };
}

export default {
  name: 'exampleDirective',
  fn: ExampleDirective
};
