describe('Open the job post on eleduck', () => {

  beforeEach(() => {
    // make sure the search bar shown
    cy.viewport(1400, 1000);
    cy.log('-----此用例执行开始-----');
  })
  
  afterEach(() => {
    cy.log('-----此用例执行结束-----');
  })

  
  // Notice
  // You can use these keywords or other things you need
  // - 测试开发
  // - 为您找到以下内容
  // - 篱下采菊
  // - 自动化测试



  it('finds and opens the job post', () => {
    cy.visit('https://eleduck.com/');

    // 具体测试思路您可以完全自由发挥，
    // 以下思路仅供参考。

    // 输入搜索内容并点击搜索
    // 1. 在页面上找到搜索框对应的css class name，通过它定位到“搜索框”对应的html元素
    // 2. 输入`全职远程在家办公`
    // 3. 找到搜索框中可点击的搜索图标
    // 4. 点击该图标，触发搜索

    cy.get('input') // TODO: css class of "search text field"
      .type('全职远程在家办公')
      .get('ul > li.ant-menu-item.app-menu-search.ant-menu-item-active > span > span > i') // TODO: css class of "search icon"
      .click();

    // 等待搜索结果页面完全导入，以方便后续操作
    // 1. 检查页面中是否包含文字 `为您找到以下内容`
    // 2. 该操作可能需要等待，可设置超时时间，比如为5秒

    cy.wait(2000); //这里增加一个多余的等待2s,不过在cypress中，是自动等待的
    cy.get('div.jsx-1345900710.search-title').should("contain", '为您找到以下内容');


    // 在搜索结果中寻找目标帖
    // 1. 通过定位 `篱下采菊` 元素来缩小范围（注意：可能有多个帖子）
    // 2. 以其为基准，向上及下向寻找帖子标题对应的html元素
    // 3. 点击标题打开帖子

    cy.get('div.jsx-1345900710.post-list > div:nth-child(1) > div.body > div > span:nth-child(2) > a > span').as('MulLink');
    cy.log('@MulLink');
    cy.get('div.jsx-1345900710.post-list > div:nth-child(1) > div.body > div > span:nth-child(2) > a > span').should("contain", '篱下采菊');
    cy.get('div.jsx-1345900710.search-title').next().find('div').find('div.body').find('h2').find('a').as ('elesa');
    cy.get('@elesa').should('have.attr','href','/posts/82fgb8');
    cy.get('div.jsx-1345900710.post-list > div:nth-child(1) > div.body > h2 > a').click();// 3. 点击标题打开帖子

    // 确定至少有一个帖子页面内容中包含 `postman`
    // 1. 由于是新打开页面，需要时间，注意设置超时时间，比如5秒
    // 2. 校验其否已经切换了页面，查看下url是否正确

    cy.wait(1000);
    cy.url().should("contain", "/posts/82fgb8");
    cy.get('div.post-contents.mb-15 > div.jsx-1052155524 > div > ol:nth-child(19) > li:nth-child(5) > p').should('contain','postman');//校验页面内容中包含'postman'
    cy.go("back");//回退重新寻找下一个符合条件的页面。
    cy.get('div.jsx-1345900710.post-list > div:nth-child(1) > div.body > div > span:nth-child(2) > a > span').should("contain", '篱下采菊');
    cy.get('div.jsx-1345900710.post-list > div:nth-child(2) > div.body > h2 > a').should("have.attr",'href','/posts/wwfyGg');//校验当前2页面是否包含

    //点击页面2
    //切换了页面，查看下url是否正确
      
    cy.get('div.jsx-1345900710.post-list > div:nth-child(2) > div.body > h2 > a').click(); // 点击新页面2
    cy.get('div.post-contents.mb-15 > div.jsx-1052155524 > div > ol:nth-child(17) > li:nth-child(4) > p').should('contain','onbording');
  });

})
