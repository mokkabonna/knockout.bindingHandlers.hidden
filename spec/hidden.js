define(['knockout', 'src/hidden'], function(ko, hidden) {

  describe('Hidden', function() {
    var viewModel;
    var element;
    var root;

    before(function () {
      root = document.createElement('div');
      root.innerHTML = '<button id="hiddenornot" data-bind="hidden:obs">foo</button>';
      document.body.appendChild(root);
      element = document.getElementById('hiddenornot');
    });

    beforeEach(function() {
      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(viewModel, root);
    });

    afterEach(function() {
      ko.cleanNode(root);
    });

    it('should be bound', function() {
      expect(ko.dataFor(element)).to.be(viewModel);
    });

    it('should show element if observable is false', function() {
      viewModel.obs(false);
      expect(element.style.display).to.be('');
    });

    it('should hide element if observable is true', function() {
      viewModel.obs(true);
      expect(element.style.display).to.be('none');
    });

  });
});
