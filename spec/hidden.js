define(['knockout', 'src/hidden'], function(ko, hidden) {

  describe('Hidden', function() {
    var viewModel;
    var root;

    beforeEach(function() {
      document.body.innerHTML = '<button id="hiddenornot" data-bind="hidden:obs">foo</button>';
      root = document.getElementById('hiddenornot');
      viewModel = {
        obs: ko.observable()
      };

      ko.applyBindings(viewModel, root);
    });

    afterEach(function() {
      ko.cleanNode(root);
    });

    it('should be bound', function() {
      expect(ko.dataFor(root)).to.be(viewModel);
    });

    it('should show element if observable is false', function() {
      viewModel.obs(false);
      equal(element.is(':hidden'), false);
    });

    it('should hide element if observable is true', function() {
      viewModel.obs(true);
      equal(element.is(':visible'), false);
    });


  });
});
