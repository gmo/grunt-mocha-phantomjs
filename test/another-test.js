describe('Another Test', function(){

  describe('should pass', function(){
    it("should equal 5", function() {
      expect(1+4).to.equal(5);
    });

    it("should not equal 7", function() {
      expect(1+1).to.not.equal(7);
    });

    it("should equal 2", function() {
      expect(1+1).to.equal(2);
    });
  });
});