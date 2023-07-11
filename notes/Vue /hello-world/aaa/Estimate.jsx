import React from 'react'

function Estimate() {
  return (
    <>
      {
        $rootScope.quickSearchText.length &&
        <div className="col-md-12 text-center searchResult">
          <span className="searchLableHeading">Search Result for : </span>
          <span className="searchResultLabel">
            {$rootScope.quickSearchText}
            <i className="icon-cross" onClick={() => clearQuickSearch()}></i>
          </span>
        </div>
      }
      <div className="clearfix"></div>
      {
        /* 

         Good morning,
         thank u so much for asking me about myself.
         My name is Nilesh Shinde. I am a Software engineer. I have one year of experience of working with react js.
         I have strong knowledge of react js, react hooks, and functional components.I am also familiar with node js.
         I have been working in angular minds company.
         Angular Minds is a leading software company specializing in cutting-edge solutions.
         We use advanced technologies to address specific business needs, ensuring client satisfaction.
         During my time at Angular Minds, I have worked on multiple projects, including ATS (Application Tracking System).

        */
      }
      {/* <!-- show-more-brands STARTS --> */}
      <show-more-popup show-dialog="moreDataDialogShown" header="moreDataHeader" data="popupList"></show-more-popup>
      {/* <!-- show-more-brands ENDS --> */}

      <div className="estimate-module">
        <div className="row">
          <div className={`col-md-2 ${$rootScope.userResponse.show_maintenance_page ? 'desableFilterCompareGlobal' : ''}`} tour-step tour-step-belongs-to="detachedEstimateTour" tour-step-title="Filters" tour-step-content="Select from a range of filters to refine your search and get drilled down results." tour-step-order="14" tour-step-placement="right">
            {
              facetjson &&
              <faceted-filter ng-if="facetjson" displayconfig="facetjson" datasource="getCompareFilters" events="filterEvents" blinker-hover-event="setNewFeature" feature="feature" set-root-scope="setRootScope" set-displayconfig="setFacetjson" show-dynamic-filters="$parent.showDynamicFilters" set-dicount-percentage="setDicountPercentage"></faceted-filter>
            }
          </div>
          <div className="col-md-10 right-nav compareTopHeading">
            {/* <!-- All code saved in notepad "D:\Projects\IntelligenceNode\Enhancement\NewVD\estimate.txt" --> */}
            {
              !$rootScope.isPriceIntelDomain &&
              <div className="col-md-12 topHeadingSection" style={{ borderBottom: 'none' }}>
                <div className="row">
                  <ul className="navPills">
                    {
                      userResponse.view_tabs.optimizer_tabs.estimate_tab &&
                      <li ui-sref="app.optimizer.estimate" ui-sref-active="activeTab">Estimate</li>
                    }
                    {
                      userResponse.view_tabs.optimizer_tabs['360_pricing_tab'] &&
                      <li ui-sref="app.optimizer.url" ui-sref-active="activeTab" style={{ marginLeft: '-3px' }}>360<sup>o</sup> Pricing Tool</li>
                    }
                  </ul>
                </div>
              </div>
            }

            <div className="col-md-12 workspace">
              {/* <!-- SMART PRICE TABLE STARTS --> */}
              <smart-price-table show-dialog="moreDataDialogShown" list="popupList" filters="filters" host-list="hostList" header="moreDataHeader" is-filter-updated="filtersUpdated" show-table="showItemsTable"></smart-price-table>
              {/* <!-- SMART PRICE TABLE ENDS --> */}
              {/* <!-- CATEGORY  SECTION STARTS--> */}
              <div className="row">
                <div className="col-md-12">
                  {
                    showNoRuleMessage &&
                    <div>Please Create Rule</div>
                  }
                  {/* <!-- CATEGORY TABLE STARTS --> */}
                  {/* <!-- CATEGORY TABLE ENDS --> */}
                </div>
              </div>
              {/* <!-- CATEGORY  SECTION ENDS--> */}
            </div>


            <div ui-view="estimate-smart-price" className="col-md-12 col-lg-12"></div>

          </div>
        </div>
      </div>


    </>
  )
}

export default Estimate