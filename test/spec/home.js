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

describe('Menu', function() {
  jasmine.Ajax.requests.filter(/menu/)[0].respondWith({
    'status': 200,
    'contentType': 'application/json',
    'responseText': getFixture('menu.json')
  });
  it('Should load menu items', function() {
    expect($('.menu li').length).toEqual(5);
  });
});