var app=window.app||{};app.page={},app.region={},app.partial={},app.helper={},Nervespine.linkSelector=".link";
app.helper.linkToProduct=Nervespine.Helper({name:"linkToProduct",linkToProduct:function(e){return"/product/"+e}});
app.page.Checkout=Nervespine.Page({selector:"main",route:"/checkout",template:app.template.checkout});
app.page.Home=Nervespine.Page({selector:"main",route:["/index.html","/"],template:app.template.home});
app.page.Home=Nervespine.Page({selector:"main",route:["/index.html","/"],template:app.template.home});
app.page.Product=Nervespine.Page({selector:"main",route:"/product/{{id}}",template:app.template.product});
app.page.Search=Nervespine.Page({selector:"main",route:"/product/search/{{term}}",template:app.template.search});
app.partial.MenuItem=Nervespine.Partial({name:"menuItem",template:app.template.menuItem});

app.partial.ProductItem=Nervespine.Partial({name:"productItem",template:app.template.productItem});

app.region.Footer=Nervespine.Region({selector:"footer",template:app.template.footer});
app.region.Header=Nervespine.Region({selector:"header",template:app.template.header});
app.region.Menu=Nervespine.Region({selector:"nav",template:app.template.menu,urls:{content:"content/menu.json"}});
app.region.searchBox=Nervespine.Region({selector:".searchBoxRegion",template:app.template.searchBox,events:{"click button":"search"},search:function(){Nervespine.go("/product/search/"+this.$el.find("input").val())}});
app.region.searchResult=Nervespine.Region({selector:".searchResultRegion",template:app.template.searchResult});
app.region.featuredProducts=Nervespine.Region({selector:".featuredProductsRegion",template:app.template.featuredProducts,urls:{content:"content/featuredProducts.json"}});
app.region.moreProductsFromSeller=Nervespine.Region({selector:".moreProductsFromSellerRegion",template:app.template.moreProductsFromSeller});
