// /d:%5CProjects%5CGit%5Cnervespine-project%5Ctest%5Ctemp%5Crunner.html

describe('Index', function() {

  it('Open home (index)', function() {
    expect($('section.home.page').length).toEqual(0);
    Nervespine.go('/');
    expect($('section.home.page').length).toEqual(1);
  });

  it('Should return true', function() {
    expect(true).toEqual(true);
  });
});