import React from 'react'

function ApplyRulesFilter() {
    return (
        <>
            {/* <!-- Apply -rule- hover wrapper for condition when rule is set STARTS --> */}
            <modal-dialog className="rules-list-popup rules-list" show="visible" on-close="cancel();" dialog-title="{rulePanelTitle}">
                <div id="rule_panel" className="rules-filter-dropdown apply-rule-wrapper appbody-height-update">
                    <div className="apply-rule create-rule-panel">
                        {
                            showError &&
                            <div className="error-msg" >
                                <span><strong>Caution: </strong> {validationErrorMessage}</span>
                            </div>
                        }
                        <div className="rule-number-heading">
                            <input type="text" placeholder="Rule name" ng-model="settings.rule_name" maxLength="64" className={` select-rule-name pull-left ${errors.rule_name_error ? 'error-red-highlight' : ''}`} ng-change="errors.rule_name_error = errors.rule_name_error ? !errors.rule_name_error : errors.rule_name_error;" />
                            <div className="info-msg pull-left">
                                <span>Mandatory fields include rule name and  'Target Price to be'</span>
                            </div>
                            <p className="pull-right"><a onClick={() => resetFilters()} className="clear-link">clear</a></p>
                        </div>
                        <div className="rule-section active apply-rule-to">
                            <div className="row rulesSelection-sec">
                                <div className="col-md-2 rule-heading-col">
                                    <label className="apply-rule-label">Apply rules to</label>
                                </div>
                                <div className="col-md-3 esti-host-dropdwn width20">
                                    <div className="rule-label">
                                        <label>My Websites</label>
                                    </div>
                                    <div>
                                        <in-drop-down options="myHostList" display-property="'host_name'" ng-model="settings.selectedHostList" set-scope="setScope" model-name="'settings.selectedHostList'" options-name="'myHostList'"></in-drop-down>
                                    </div>
                                </div>
                                <div className={`col-md-3 esti-category-dropdwn width20 myCategoryBack ${showDynamicParams ? 'dynamicParamsPresent' : ''}`}>
                                    <div className="rule-label">
                                        <label>My category</label>
                                    </div>
                                    {
                                        (($rootScope.userResponse.shopify_login == false) && ($rootScope.userResponse.show_groups_filter == false)) &&
                                        <div className="category-dd multiSelectCatMenu" role="navigation">
                                            <category-multi-select label-display="false" tree-data="categories.sub_categories" list-click-event="myCategoryClicked" selected-list="selectedCategory" immediate-selection-apply="true" set-tree-data="setCategories" set-selected-list="setSelectedCategory"></category-multi-select>
                                        </div>
                                    }
                                    {
                                        ($rootScope.userResponse.shopify_login || $rootScope.userResponse.show_groups_filter) &&
                                        <div>
                                            <in-drop-down options="groupsList" display-property="'name'" ng-model="settings.selectedGroups" set-scope="setScope" model-name="'settings.selectedGroups'" events="groupDropDownEvents" options-name="'groupsList'"></in-drop-down>
                                        </div>
                                    }
                                </div>
                                {
                                    ($rootScope.showBrand && ruleBrandsList.length) &&
                                    <div className="col-md-3 esti-brand-dropdwn width20">
                                        <div className="rule-label">
                                            <label>My brand</label>
                                        </div>
                                        <div>
                                            <in-drop-down dropdown-type="'brands'" options="ruleBrandsList" display-property="'name'" ng-model="settings.selectedBrandsList" events="brandDropDownEvents" show-exclude="true" is-exclude-selected="settings.isExcludeMyBrands" set-scope="setScope" model-name="'settings.selectedBrandsList'" options-name="'ruleBrandsList'"></in-drop-down>
                                        </div>
                                    </div>
                                }
                                <div className="col-md-2 width20 sku-box">
                                    <div className="rule-label">
                                        <label>SKU</label>
                                    </div>
                                    <input placeholder="Enter value" className="select-rule-name sku-input" ng-model="$parent.$parent.$parent.$parent.skuIdsList" tooltips tooltip-template="You can enter multiple ids separated by comma" tooltip-side="bottom" />
                                </div>
                            </div>
                            {
                                (showDynamicParams && $rootScope.userResponse.show_category) &&
                                <div className="row dynamic-Sec">
                                    <div className="dynamic-params-section">
                                        <div className="row rule-heading-col">
                                            <label>Dynamic Parameters</label>
                                        </div>
                                        <div className="row">
                                            {
                                                attributesList.map(attribute =>
                                                    <div className="col-md-2 esti-brand-dropdwn width20">
                                                        <div className="rule-label">
                                                            <label>{attribute.label}</label>
                                                        </div>
                                                        <div>
                                                            <in-drop-down dropdown-type="attribute.id" options="attribute.options" ng-model="attribute.selections" display-property="'name'" events="brandDropDownEvents" set-scope="setScope" model-name="attribute.id+'selections'" options-name="attribute.id+'options'"></in-drop-down>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        {
                            (ruleOptions.show_price_types) &&
                            <div className="rule-section price-limit-margine row">
                                <div className="adjust-padding">
                                    <div className="rule-heading-col custom-chkbox-wrapper label-name">
                                        <div className={`custom-checkbox ${settings.isPriceTypesSelected ? 'checked-on' : ''}`}>
                                            <input type="checkbox" name="" id="price-types" ng-model="settings.isPriceTypesSelected" />
                                            <label for="price-types" className="custom-label"></label>
                                        </div>
                                        <label for="price-types">Price Types</label>
                                    </div>
                                </div>
                                {
                                    settings.isPriceTypesSelected &&
                                    <div>
                                        <div className="col-md-2 need-margin-top adjust-padding">
                                            <div className="rule-heading-col inner-title label-name">
                                                <label>Apply price changes to</label>
                                            </div>
                                        </div>
                                        <button-group className="col-md-6 need-margin-top tabcontent-text" options="priceTypeOptions" ng-model="settings.selectedPriceType"></button-group>
                                    </div>
                                }
                            </div>
                        }

                        {
                            ruleOptions.show_cost_margin &&
                            <div className="rule-section price-limit-margine row">
                                <div className="adjust-padding">
                                    <div className="rule-heading-col custom-chkbox-wrapper label-name">
                                        <div className={`custom-checkbox ${settings.isCostMarginSelected ? 'checked-on' : ''}`}>
                                            <input type="checkbox" name="" id="cost-margin" ng-model="settings.isCostMarginSelected" />
                                            <label for="cost-margin" className="custom-label"></label>
                                        </div>
                                        <label for="cost-margin"><span>Cost Margin</span></label>
                                    </div>
                                </div>
                                {
                                    settings.isCostMarginSelected &&
                                    <div>
                                        <div className="col-md-2 need-margin-top adjust-padding">
                                            <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                <div className={`custom-checkbox ${settings.isLowerCostMarginSelected ? 'checked-on' : ''}`}>
                                                    <input type="checkbox" name="" id="lower-cost-margin" ng-model="settings.isLowerCostMarginSelected" ng-change="errors.cost_margin_one_selection_error = errors.cost_margin_one_selection_error ? !errors.cost_margin_one_selection_error : errors.cost_margin_one_selection_error" />
                                                    <label for="lower-cost-margin" className={`custom-label ${errors.cost_margin_one_selection_error ? 'error-red-highlight' : ''}`} ng-className="{'error-red-highlight':errors.cost_margin_one_selection_error}"></label>
                                                </div>
                                                <label for="lower-cost-margin"><span>Not Lower than</span></label>
                                            </div>
                                        </div>
                                        <div className="col-md-3 need-margin-top adjust-padding">
                                            <enter-value data="settings.lowerCostMarginValue" currency="userResponse.currency" is-percentage="isLowerCostMarginPercentage" is-error="errors.lower_cost_margin_value_error"></enter-value>
                                        </div>
                                        <div className="col-md-2 need-margin-top adjust-padding">
                                            <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                <div className={`custom-checkbox ${settings.isHigherCostMarginSelected ? 'checked-on' : ''}`}>
                                                    <input type="checkbox" name="" id="higher-cost-margin" ng-model="settings.isHigherCostMarginSelected" ng-change="errors.cost_margin_one_selection_error = errors.cost_margin_one_selection_error ? !errors.cost_margin_one_selection_error : errors.cost_margin_one_selection_error" />
                                                    <label for="higher-cost-margin" className={`custom-label ${errors.cost_margin_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                </div>
                                                <label for="higher-cost-margin"><span>Not Higher than</span></label>
                                            </div>
                                        </div>
                                        <div className="col-md-3 need-margin-top adjust-padding">
                                            <enter-value data="settings.higherCostMarginValue" currency="userResponse.currency" is-percentage="isHigherCostMarginPercentage" is-error="errors.higher_cost_margin_value_error"></enter-value>
                                        </div>
                                    </div>
                                }
                            </div>
                        }

                        <div className="rule-section target-price">
                            <div className="row">
                                <div className="tab-header clearfix">
                                    <div className="col-md-2 adjust-padding">
                                        <div className="rule-heading-col">
                                            <div className="custom-chkbox-wrapper">
                                                <div  >
                                                </div>
                                                <div className="label-name">
                                                    <label className="checkbox-name-label"><span>Target Price to be</span></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-10" >
                                        <div className="btn-group btn-block apply-screen-btns btn-fixed-width">
                                            <button type="button" className={`btn btn-primary ${isAboveBelowClicked ? 'active-btn' : ''}`} onClick={() => aboveBelowClicked()}>Above - Below</button>
                                            <button type="button" className={`btn btn-primary ${!isAboveBelowClicked ? 'active-btn' : ''}`} onClick={() => equalToClicked()}>Equal to</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-10 tab-content" >
                                    <div className="row tab-content-border">
                                        {
                                            isAboveBelowClicked &&
                                            <div className="clearfix tab-content-row">
                                                <div className="col-md-2 need-margin-top adjust-padding">
                                                    <div className="rule-heading-col inner-title">
                                                        <div className="custom-chkbox-wrapper">
                                                            <div className={`custom-checkbox  ${settings.isAboveTargetPriceSelected ? 'checked-on' : ''}`}>
                                                                <input type="checkbox" name="" id="above" ng-model="settings.isAboveTargetPriceSelected" ng-change="errors.target_above_below_selection_error = errors.target_above_below_selection_error ? !errors.target_above_below_selection_error : errors.target_above_below_selection_error;" />
                                                                <label for="above" className={`custom-label ${errors.target_above_below_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                            </div>
                                                            <div className="label-name">
                                                                <label for="above" className="checkbox-name-label"><span>Above</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 need-margin-top tabcontent-text">
                                                    {/* <!-- Selects ONE START --> */}
                                                    <div className="same-width">
                                                        <div>
                                                            <in-drop-down options="comparePriceOptionsForAbove" display-property="'name'" ng-model="settings.selectedComparePriceOptionsForAbove" search-visible="false" single-select="true" set-scope="setScope" model-name="'settings.selectedComparePriceOptionsForAbove'" options-name="'comparePriceOptionsForAbove'"></in-drop-down>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Selects ONE ENDS --> */}
                                                    {/* <!-- Slect Brand START--> */}
                                                    {
                                                        ($rootScope.showBrand && $parent.$parent.$parent.optimizerModuleOptions.show_target_brands && ruleBrandsListForAbove.length) &&
                                                        <div className="same-width">
                                                            <div>
                                                                <in-drop-down options="ruleBrandsListForAbove" dropdown-type="'brands'" display-property="'name'" ng-model="settings.selectedBrandsListForAbove" events="brandDropDownEvents" default-text="Brands" set-scope="setScope" model-name="'settings.selectedBrandsListForAbove'" options-name="'ruleBrandsListForAbove'"></in-drop-down>
                                                            </div>
                                                        </div>
                                                    }
                                                    {/* <!-- Selct Brand ENDS --> */}
                                                    {/* <!-- Select Host START--> */}
                                                    <div className="same-width">
                                                        <div>
                                                            <in-drop-down options="hostListForAbove" display-property="'host_name'" ng-model="settings.selectedHostListForAbove" events="hostDropDownEvents" default-text="Websites" set-scope="setScope" model-name="'settings.selectedHostListForAbove'" options-name="'hostListForAbove'"></in-drop-down>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Selct Host ENDS --> */}
                                                    {/* <!-- Enter Value START --> */}
                                                    <enter-value data="settings.aboveTargetValue" currency="userResponse.currency" is-percentage="isAbovePercentage" add-width-className="true" is-error="errors.target_above_value_error"></enter-value>
                                                    {/* <!-- Enter Value ENDS --> */}
                                                </div>
                                            </div>
                                        }
                                        {
                                            isAboveBelowClicked &&
                                            <div className="clearfix tab-content-row">
                                                <div className="col-md-2 need-margin-top adjust-padding">
                                                    <div className="rule-heading-col inner-title">
                                                        <div className="custom-chkbox-wrapper">
                                                            <div className={`custom-checkbox ${settings.isBelowTargetPriceSelected ? 'checked-on' : ''}`}>
                                                                <input type="checkbox" name="" id="below" ng-model="settings.isBelowTargetPriceSelected" ng-change="errors.target_above_below_selection_error = errors.target_above_below_selection_error ? !errors.target_above_below_selection_error : errors.target_above_below_selection_error;" />
                                                                <label for="below" className={`custom-label ${errors.target_above_below_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                            </div>
                                                            <div className="label-name">
                                                                <label for="below" className="checkbox-name-label"><span>Below</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 need-margin-top tabcontent-text">
                                                    {/* <!-- Selects ONE START --> */}
                                                    <div className="same-width">
                                                        <div>
                                                            <in-drop-down options="comparePriceOptionsForBelow" display-property="'name'" ng-model="settings.selectedComparePriceOptionsForBelow" search-visible="false" single-select="true" set-scope="setScope" model-name="'settings.selectedComparePriceOptionsForBelow'" options-name="'comparePriceOptionsForBelow'"></in-drop-down>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Selects ONE ENDS --> */}
                                                    {/* <!-- Slect Brand START--> */}
                                                    {
                                                        ($rootScope.showBrand && $parent.$parent.$parent.optimizerModuleOptions.show_target_brands && ruleBrandsListForBelow.length) &&
                                                        <div className="same-width">
                                                            <div>
                                                                <in-drop-down options="ruleBrandsListForBelow" dropdown-type="'brands'" display-property="'name'" ng-model="settings.selectedBrandsListForBelow" events="brandDropDownEvents" default-text="Brands" set-scope="setScope" model-name="'settings.selectedBrandsListForBelow'" options-name="'ruleBrandsListForBelow'"></in-drop-down>
                                                            </div>
                                                        </div>
                                                    }
                                                    {/* <!-- Selct Brand ENDS --> */}
                                                    {/* <!-- Select Host START--> */}
                                                    <div className="same-width">
                                                        <div>
                                                            <in-drop-down options="hostListForBelow" display-property="'host_name'" ng-model="settings.selectedHostListForBelow" events="hostDropDownEvents" default-text="Websites" set-scope="setScope" model-name="'settings.selectedHostListForBelow'" options-name="'hostListForBelow'"></in-drop-down>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Select Host ENDS --> */}
                                                    {/* <!-- Enter Value START --> */}
                                                    <enter-value data="settings.belowTargetValue" currency="userResponse.currency" is-percentage="isBelowPercentage" add-width-className="true" is-error="errors.target_below_value_error"></enter-value>
                                                    {/* <!-- Enter Value ENDS --> */}
                                                </div>
                                            </div>
                                        }
                                        {
                                            (!isAboveBelowClicked) &&
                                            <div className="clearfix tab-content-row">
                                                <div className="col-md-2 need-margin-top adjust-padding">
                                                    <div className="rule-heading-col inner-title">
                                                        <div className="custom-chkbox-wrapper">
                                                            <div className="label-name">
                                                                <label for="above" className="checkbox-name-label"><span>Equal To</span></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 need-margin-top tabcontent-text">
                                                    {/* <!-- Selects ONE START --> */}
                                                    <div className="same-width">
                                                        <div>
                                                            <in-drop-down options="comparePriceOptionsForEqual" display-property="'name'" ng-model="settings.selectedComparePriceOptionsForEqual" search-visible="false" single-select="true" set-scope="setScope" model-name="'settings.selectedComparePriceOptionsForEqual'" options-name="'comparePriceOptionsForEqual'"></in-drop-down>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Selects ONE ENDS --> */}
                                                    {/* <!-- Select Brand START--> */}
                                                    {
                                                        ($rootScope.showBrand && $parent.$parent.$parent.optimizerModuleOptions.show_target_brands && ruleBrandsListForEqual.length) &&
                                                        <div className="same-width">
                                                            <div>
                                                                <in-drop-down options="ruleBrandsListForEqual" dropdown-type="'brands'" display-property="'name'" ng-model="settings.selectedBrandsListForEqual" events="brandDropDownEvents" default-text="Select Brands" set-scope="setScope" model-name="'settings.selectedBrandsListForEqual'" options-name="'ruleBrandsListForEqual'"></in-drop-down>
                                                            </div>
                                                        </div>
                                                    }
                                                    {/* <!-- Select Brand ENDS --> */}
                                                    {/* <!-- Select Host START--> */}
                                                    <div className="same-width">
                                                        <div>
                                                            <in-drop-down options="hostListForEqual" display-property="'host_name'" ng-model="settings.selectedHostListForEqual" events="hostDropDownEvents" default-text="Select Websites" set-scope="setScope" model-name="'settings.selectedHostListForEqual'" options-name="'hostListForEqual'"></in-drop-down>
                                                        </div>
                                                    </div>
                                                    {/* <!-- Select Host ENDS --> */}
                                                    {/* <!-- Enter Value START --> */}
                                                    {/* <!-- Enter Value ENDS --> */}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {
                                    (false && subCategories && subCategories.length) &&
                                    <div className="col-md-2 target-align" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                        {/* <!-- Slect Brand START--> */}
                                        <div className="target-sub-category">
                                            <div className="rule-label">
                                                <label>Targeted Sub Category</label>
                                            </div>
                                            <div>
                                                <in-drop-down options="subCategories" display-property="'category'" ng-model="selectedSubCategories" set-scope="setScope" model-name="'selectedSubCategories'" options-name="'subCategories'"></in-drop-down>
                                            </div>
                                        </div>
                                        {/* <!-- Selct Brand ENDS --> */}
                                    </div>
                                }
                            </div>
                        </div>
                        {
                            ruleOptions.show_apply_conditions &&
                            <div className="rule-section apply-conditions">
                                <div className="row">
                                    <div className="clearfix apply-condition-title">
                                        <div className="col-md-3">
                                            <div className="rule-heading-col">
                                                <div className="custom-chkbox-wrapper">
                                                    <div className={`custom-checkbox ${settings.isApplyConditionsSelected ? 'checked-on' : ''}`}>
                                                        <input type="checkbox" name="" id="apply-conditions" ng-model="settings.isApplyConditionsSelected" ng-change="one_checkbox_selection_error = one_checkbox_selection_error ? !one_checkbox_selection_error : one_checkbox_selection_error;" />
                                                        <label for="apply-conditions" className={`custom-label ${one_checkbox_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                    </div>
                                                    <div className="label-name">
                                                        <label for="apply-conditions" className="checkbox-name-label"><span>Apply Conditions</span></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-9">&nbsp;</div>
                                    </div>
                                    {
                                        settings.isApplyConditionsSelected &&
                                        <div className="clearfix visibi-similarity">
                                            {
                                                $rootScope.showRank &&
                                                <div>
                                                    <div className="col-md-2 need-margin-top adjust-padding">
                                                        <div className="rule-heading-col inner-title">
                                                            <div className="custom-chkbox-wrapper">
                                                                <div className={`custom-checkbox ${settings.isVisibiltySelected ? 'checked-on' : ''}`}>
                                                                    <input type="checkbox" name="" id="visibility" ng-model="settings.isVisibiltySelected" ng-change="errors.apply_conditions_one_selection_error = errors.apply_conditions_one_selection_error ? !errors.apply_conditions_one_selection_error : errors.apply_conditions_one_selection_error" />
                                                                    <label for="visibility" className={`custom-label ${errors.apply_conditions_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                                </div>
                                                                <div className="label-name">
                                                                    <label for="visibility" className="checkbox-name-label"><span>Visibility</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <three-button-group ng-className="{'click-disable':!settings.isVisibiltySelected}" is-high-clicked="settings.isHighVisibilty" is-medium-clicked="settings.isMediumVisibilty" is-low-clicked="settings.isLowVisibilty" hide-exact="true"></three-button-group>
                                                </div>
                                            }
                                        </div>
                                    }
                                    {
                                        settings.isApplyConditionsSelected &&
                                        <div className="clearfix check-enter-value">

                                            {
                                                ruleOptions.show_fully_stocked &&
                                                <div className="col-md-6">
                                                    <div className="col-sm-4 need-margin-top adjust-padding">
                                                        <div className="rule-heading-col inner-title applyConditionFully">
                                                            <div className="custom-chkbox-wrapper">
                                                                <div className={`custom-checkbox ${settings.isFullyStockedSelected ? 'checked-on' : ''}`}>
                                                                    <input type="checkbox" name="" id="fully-stocked" ng-model="settings.isFullyStockedSelected" ng-change="errors.apply_conditions_one_selection_error = errors.apply_conditions_one_selection_error ? !errors.apply_conditions_one_selection_error : errors.apply_conditions_one_selection_error;" />
                                                                    <label for="fully-stocked" className={`custom-label ${errors.apply_conditions_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                                </div>
                                                                <div className="label-name">
                                                                    <label for="fully-stocked" className="checkbox-name-label"><span>% fully stocked</span></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8 need-margin-top leftPadding10px">
                                                        <enter-value ng-className="{'click-disable':!settings.isFullyStockedSelected}" data="settings.fullyStockedValue" is-error="errors.fully_stocked_value_error"></enter-value>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        }

                        {
                            (ruleOptions.show_matching_level_exact || ruleOptions.show_matching_level_similar || ruleOptions.show_matching_status) &&
                            <div className="rule-section price-limit-margine row">
                                <div className="adjust-padding">
                                    <div className="rule-heading-col custom-chkbox-wrapper label-name">
                                        <div className={`custom-checkbox ${settings.isMatchingSelected ? 'checked-on' : ''}`}>
                                            <input type="checkbox" name="" id="matching" ng-model="settings.isMatchingSelected" />
                                            <label for="matching" className="custom-label"></label>
                                        </div>
                                        <label for="matching"><span>Matching</span></label>
                                    </div>
                                </div>
                                {
                                    settings.isMatchingSelected &&
                                    <div>
                                        {
                                            ruleOptions.show_matching_level_exact &&
                                            <div className="col-md-3 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <div className={`custom-checkbox ${settings.isExactMatchingSelected ? 'checked-on' : ''}`}>
                                                        <input type="checkbox" name="" id="exact-matching-level" ng-model="settings.isExactMatchingSelected" ng-change="errors.matching_one_selection_error = errors.matching_one_selection_error ? !errors.matching_one_selection_error : errors.matching_one_selection_error" />
                                                        <label for="exact-matching-level" className={`custom-label ${errors.matching_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                    </div>
                                                    <label for="exact-matching-level"><span>Matching Level <strong>Exact</strong></span></label>
                                                </div>
                                            </div>
                                        }
                                        {
                                            ruleOptions.show_matching_level_similar &&
                                            <div className="col-md-9">
                                                <div className="col-md-3 need-margin-top adjust-padding">
                                                    <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                        <div className={`custom-checkbox ${settings.isSimilarMatchingSelected ? 'checked-on' : ''}`}>
                                                            <input type="checkbox" name="" id="similar-matching-level" ng-model="settings.isSimilarMatchingSelected" ng-change="errors.matching_one_selection_error = errors.matching_one_selection_error ? !errors.matching_one_selection_error : errors.matching_one_selection_error" />
                                                            <label for="similar-matching-level" className={`custom-label ${errors.matching_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                        </div>
                                                        <label for="similar-matching-level"><span>Matching Level <strong>Similar</strong></span></label>
                                                    </div>
                                                </div>
                                                <button-group className="col-md-5 need-margin-top" options="matchingOptions" ng-model="settings.selectedSimilarMatchingLevel" style={{ marginTop: '10px' }}></button-group>
                                                {
                                                    settings.isSimilarMatchingSelected &&
                                                    <div className="col-md-9 clearfix check-enter-value">
                                                        <div className="col-sm-12 label-name">
                                                            <label>Price Range</label>
                                                        </div>
                                                        <div className="label-name col-xs-8">
                                                            <div className="col-sm-3 need-margin-top adjust-padding" style={{ paddingLeft: '0px' }}>
                                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name" style={{ marginLeft: '0px' }}>
                                                                    <div className={`custom-checkbox ${settings.isAbovePriceRangeSelected ? 'checked-on' : ''}`}>
                                                                        <input type="checkbox" id="abovePriceRange" ng-model="settings.isAbovePriceRangeSelected" />
                                                                        <label for="abovePriceRange" className={`custom-label ${errors.target_above_below_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                                    </div>
                                                                    <label for="abovePriceRange" className="custom-label">Above</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9 need-margin-top leftPadding10px">
                                                                <enter-value data="settings.abovePriceRangeValue" ng-className="{'click-disable':!settings.isAbovePriceRangeSelected}" currency="userResponse.currency" is-percentage="isAbovePriceRangePercentage" is-error="errors.price_range_above_value_error"></enter-value>
                                                            </div>
                                                            <div className="col-sm-3 need-margin-top adjust-padding" style={{ paddingLeft: '0px' }}>
                                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name" style={{ marginLeft: '0px' }}>
                                                                    <div className={`custom-checkbox ${settings.isBelowPriceRangeSelected ? 'checked-on' : ''}`}>
                                                                        <input type="checkbox" id="belowPriceRange" ng-model="settings.isBelowPriceRangeSelected" />
                                                                        <label for="belowPriceRange" className={`custom-label ${errors.target_above_below_selection_error ? 'error-red-highlight' : ''}`} ng-className="{'error-red-highlight':errors.target_above_below_selection_error}"></label>
                                                                    </div>
                                                                    <label for="belowPriceRange" className="custom-label">Below</label>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-9 need-margin-top leftPadding10px">
                                                                <enter-value data="settings.belowPriceRangeValue" ng-className="{'click-disable':!settings.isBelowPriceRangeSelected}" currency="userResponse.currency" is-percentage="isBelowPriceRangePercentage" is-error="errors.price_range_below_value_error"></enter-value>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        }
                                        {
                                            ruleOptions.show_matching_status &&
                                            <div className="col-md-9">
                                                <div className="col-md-3 need-margin-top adjust-padding">
                                                    <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                        <div className={`custom-checkbox ${settings.isMatchingStatusSelected ? 'checked-on' : ''}`}>
                                                            <input type="checkbox" name="" id="matching-status" ng-model="settings.isMatchingStatusSelected" ng-change="errors.matching_one_selection_error = errors.matching_one_selection_error ? !errors.matching_one_selection_error : errors.matching_one_selection_error" />
                                                            <label for="matching-status" className={`custom-label ${errors.matching_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                        </div>
                                                        <label for="matching-status"><span>Matching <strong>Status</strong></span></label>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 need-margin-top">
                                                    <in-drop-down options="ruleOptions.matchingStatusOptions" display-property="'name'" ng-model="settings.selectedMatchingStatus" default-text="Select Matches" search-visible="false" show-options-only="true" events="matchingStatusDropDownEvents" set-scope="setScope" model-name="'settings.selectedMatchingStatus'" options-name="'ruleOptions.matchingStatusOptions'"></in-drop-down>
                                                </div>
                                                {
                                                    matchingStatusSPOptions.length &&
                                                    <div className="col-md-3 need-margin-top tabcontent-text" in-drop-down single-select="true" search-visible="false" options="matchingStatusSPOptions" display-property="'name'" ng-model="settings.selectedMatchingStatusSP"></div>
                                                }
                                                {
                                                    settings.selectedMatchingStatusSP.id == 'cost_markup' &&
                                                    <enter-value className="col-md-3 need-margin-top tabcontent-text full-width-textbox" data="settings.matchingStatusCostMarkupValue" currency="userResponse.currency" is-percentage="isMSCostMarkupPercentage" is-error="errors.ms_cost_markup_value_error" is-toggle-disabled="true"></enter-value>
                                                }
                                            </div>
                                        }

                                        {
                                            ($rootScope.getMatchInstockFilters.match_instock.length > 0) &&
                                            <div className="col-md-9">
                                                <div className="col-md-3 need-margin-top adjust-padding">
                                                    <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                        <div className={`custom-checkbox ${settings.isCompMatchingOptionsSelected ? 'checked-on' : ''}`}>
                                                            <input type="checkbox" name="" id="matching-instock-status" ng-model="settings.isCompMatchingOptionsSelected" ng-change="errors.matching_one_selection_error = errors.matching_one_selection_error ? !errors.matching_one_selection_error : errors.matching_one_selection_error" />
                                                            <label for="matching-instock-status" className={`custom-label ${errors.matching_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                        </div>
                                                        <label for="matching-status"><span><strong>Competitor Instock</strong> Matches</span></label>
                                                    </div>
                                                </div>
                                                <div new-radio-select className="col-md-3 need-margin-top" options="ruleOptions.compMatchingOptions" display-property="'name'" default-text="Matching Instock" ng-model="settings.compMatchingOptionsSelected" ng-click="matchingCompInstockEvents(settings.compMatchingOptionsSelected)"></div>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        }
                        {
                            ruleOptions.show_price_limit_margin &&
                            <div className="rule-section price-limit-margine row">
                                <div className="adjust-padding">
                                    <div className="rule-heading-col custom-chkbox-wrapper label-name">
                                        <div className={`custom-checkbox ${settings.isPriceLimitSelected ? 'checked-on' : ''}`}>
                                            <input type="checkbox" name="" id="price-limit-margine" ng-model="settings.isPriceLimitSelected" ng-change="one_checkbox_selection_error = one_checkbox_selection_error ? !one_checkbox_selection_error : one_checkbox_selection_error;" />
                                            <label for="price-limit-margine" className={`custom-label ${one_checkbox_selection_error ? 'error-red-highlight' : ''}`}></label>
                                        </div>
                                        <label for="price-limit-margine"><span>Limits</span></label>
                                    </div>
                                </div>
                                {
                                    settings.isPriceLimitSelected &&
                                    <div>
                                        <div className="clearfix">
                                            <div className="col-md-4 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <div className={`custom-checkbox ${settings.isMaxDiscountSelected ? 'checked-on' : ''}`}>
                                                        <input type="checkbox" name="" id="max-discount" ng-model="settings.isMaxDiscountSelected" ng-change="errors.limits_one_selection_error = errors.limits_one_selection_error ? !errors.limits_one_selection_error : errors.limits_one_selection_error" />
                                                        <label for="max-discount" className={`custom-label ${errors.limits_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                    </div>
                                                    <label for="max-discount"><span>Maximum Discount (From MSRP)</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-4 need-margin-top adjust-padding">
                                                <enter-value data="settings.priceLimitValue" currency="userResponse.currency" is-percentage="isPriceLimitPercentage" is-error="errors.price_limit_value_error"></enter-value>
                                            </div>
                                        </div>
                                        {
                                            ruleOptions.show_standard_deviation_in_limits &&
                                            <div className="clearfix">
                                                <div className="col-md-5 need-margin-top adjust-padding">
                                                    <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                        <div className={`custom-checkbox ${settings.isStdDevCompAvgSelected ? 'checked-on' : ''}`}>
                                                            <input type="checkbox" name="" id="std-dev-comp-avg" ng-model="settings.isStdDevCompAvgSelected" ng-change="errors.limits_one_selection_error = errors.limits_one_selection_error ? !errors.limits_one_selection_error : errors.limits_one_selection_error" />
                                                            <label for="std-dev-comp-avg" className={`custom-label ${errors.limits_one_selection_error ? 'error-red-highlight' : ''}`} ></label>
                                                        </div>
                                                        <label for="std-dev-comp-avg"><span>One standard deviation from competitive average</span></label>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 btn-group apply-screen-btns need-margin-top adjust-padding">
                                                    <button type="button" className={`btn btn-primary ${settings.isStdDevCompAvg ? 'active-btn' : ''}`} onClick={() => settings.isStdDevCompAvg = true}>Yes</button>
                                                    <button type="button" className={`btn btn-primary ${!settings.isStdDevCompAvg ? 'active-btn' : ''}`} onClick={() => settings.isStdDevCompAvg = false}>No</button>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        }
                        {
                            ruleOptions.show_customer_pull &&
                            <div className="rule-section price-limit-margine row">
                                <div className="adjust-padding">
                                    <div className="rule-heading-col custom-chkbox-wrapper label-name">
                                        <div className={`custom-checkbox ${settings.isCustomerPullSelected ? 'checked-on' : ''}`}>
                                            <input type="checkbox" name="" id="customer-perception" ng-model="settings.isCustomerPullSelected" />
                                            <label for="customer-perception" className="custom-label"></label>
                                        </div>
                                        <label for="customer-perception">Customer "Pull"</label>
                                    </div>
                                </div>
                                {
                                    settings.isCustomerPullSelected &&
                                    <div>
                                        {/* <!-- Elasticity Section --> */}
                                        <div className="clearfix">
                                            <div className="need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <div className={`custom-checkbox ${settings.isElasticitySelected ? 'checked-on' : ''}`}>
                                                        <input type="checkbox" name="" id="elasticity" ng-model="settings.isElasticitySelected" ng-change="errors.customerpull_one_selection_error = errors.customerpull_one_selection_error ? !errors.customerpull_one_selection_error : errors.customerpull_one_selection_error" />
                                                        <label for="elasticity" className={`custom-label ${errors.customerpull_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                    </div>
                                                    <label for="elasticity">Elasticity</label>
                                                </div>
                                            </div>
                                            {
                                                settings.isElasticitySelected &&
                                                <div className="innermost-rule-section">
                                                    <div className="col-md-4 need-margin-top adjust-padding">
                                                        <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                            <div className={`custom-checkbox ${settings.isPriceElasticitySelected ? 'checked-on' : ''}`}>
                                                                <input type="checkbox" name="" id="price-elasticity" ng-model="settings.isPriceElasticitySelected" ng-change="errors.elasticity_one_selection_error = errors.elasticity_one_selection_error ? !errors.elasticity_one_selection_error : errors.elasticity_one_selection_error" />
                                                                <label for="price-elasticity" className={`custom-label ${errors.elasticity_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                            </div>
                                                            <label for="price-elasticity">Price Elasticity</label>
                                                        </div>
                                                        <button-group className="col-md-12 need-margin-top tabcontent-text" options="priceElasticityOptions" ng-model="settings.selectedPriceElasticity"></button-group>
                                                    </div>
                                                    <div className="col-md-4 need-margin-top adjust-padding">
                                                        <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                            <div className={`custom-checkbox ${settings.isCrossProductElasticitySelected ? 'checked-on' : ''}`}>
                                                                <input type="checkbox" name="" id="cross-product-elasticity" ng-model="settings.isCrossProductElasticitySelected" ng-change="errors.elasticity_one_selection_error = errors.elasticity_one_selection_error ? !errors.elasticity_one_selection_error : errors.elasticity_one_selection_error" />
                                                                <label for="cross-product-elasticity" className={`custom-label ${errors.elasticity_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                            </div>
                                                            <label for="cross-product-elasticity">Cross Product Elasticity</label>
                                                        </div>
                                                        <button-group className="col-md-12 need-margin-top tabcontent-text" options="crossProductElasticityOptions" ng-model="settings.selectedCrossProductElasticity"></button-group>
                                                    </div>
                                                    <div className="col-md-4 need-margin-top adjust-padding">
                                                        <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                            <div className={`custom-checkbox ${settings.isCompetitorElasticitySelected ? 'checked-on' : ''}`}>
                                                                <input type="checkbox" name="" id="competitor-elasticity" ng-model="settings.isCompetitorElasticitySelected" ng-change="errors.elasticity_one_selection_error = errors.elasticity_one_selection_error ? !errors.elasticity_one_selection_error : errors.elasticity_one_selection_error" />
                                                                <label for="competitor-elasticity" className={`custom-label ${errors.elasticity_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                            </div>
                                                            <label for="competitor-elasticity">Competitor Elasticity</label>
                                                        </div>
                                                        <button-group className="col-md-12 need-margin-top tabcontent-text" options="competitorElasticityOptions" ng-model="settings.selectedCompetitorElasticity"></button-group>
                                                    </div>
                                                </div>
                                            }
                                        </div>

                                        {/* <!-- Inventory - Client Section --> */}
                                        <div className="clearfix">
                                            <div className="need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <div className={`custom-checkbox ${settings.isClientInventorySelected ? 'checked-on' : ''}`}>
                                                        <input type="checkbox" name="" id="client-inventory" ng-model="settings.isClientInventorySelected" ng-change="errors.customerpull_one_selection_error = errors.customerpull_one_selection_error ? !errors.customerpull_one_selection_error : errors.customerpull_one_selection_error" />
                                                        <label for="client-inventory" className={`custom-label ${errors.customerpull_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                    </div>
                                                    <label for="client-inventory">Inventory - Client</label>
                                                </div>
                                            </div>
                                            {
                                                settings.isClientInventorySelected &&
                                                <div className="innermost-rule-section">
                                                    <div className="col-md-3 need-margin-top adjust-padding">
                                                        <div className="rule-heading-col inner-title label-name">
                                                            <label>Apply only if inventory level is</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="col-md-12 need-margin-top">
                                                            <button-group className="col-md-4" options="clientInventoryOptions" ng-model="settings.selectedClientInventory.measure.type"></button-group>
                                                            <span className="col-md-1 rule-heading-col">than</span>
                                                            <enter-value className="col-md-5" data="settings.selectedClientInventory.measure.value" currency="userResponse.currency" is-percentage="settings.selectedClientInventory.measure" is-error="client_inventory_error.measure" is-toggle-disabled="true"></enter-value>
                                                        </div>
                                                        <div className="col-md-12 need-margin-top">
                                                            <button-group className="col-md-4" options="clientInventoryLevelOptions" ng-model="settings.selectedClientInventory.level.type"></button-group>
                                                            <span className="col-md-1 rule-heading-col">than</span>
                                                            <enter-value className="col-md-5" data="settings.selectedClientInventory.level.value" currency="userResponse.currency" is-percentage="settings.selectedClientInventory.level" is-error="client_inventory_error.level" is-toggle-disabled="true"></enter-value>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>

                                        {/* <!-- Inventory - Competitor Section --> */}
                                        <div className="clearfix">
                                            <div className="need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <div className={`custom-checkbox ${settings.isCompetitorInventorySelected ? 'checked-on' : ''}`}>
                                                        <input type="checkbox" name="" id="competitor-inventory" ng-model="settings.isCompetitorInventorySelected" ng-change="errors.customerpull_one_selection_error = errors.customerpull_one_selection_error ? !errors.customerpull_one_selection_error : errors.customerpull_one_selection_error" />
                                                        <label for="competitor-inventory" className={`custom-label ${errors.customerpull_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                    </div>
                                                    <label for="competitor-inventory">Inventory - Competitor</label>
                                                </div>
                                            </div>
                                            {
                                                settings.isCompetitorInventorySelected &&
                                                <div className="innermost-rule-section">
                                                    <div className="col-md-3 need-margin-top adjust-padding">
                                                        <div className="rule-heading-col inner-title label-name">
                                                            <label>Apply only if inventory level is</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="col-md-12 need-margin-top">
                                                            <button-group className="col-md-4" options="competitorInventoryOptions" ng-model="settings.selectedCompetitorInventory.measure.type"></button-group>
                                                            <span className="col-md-1 rule-heading-col">than</span>
                                                            <enter-value className="col-md-5" data="settings.selectedCompetitorInventory.measure.value" currency="userResponse.currency" is-percentage="settings.selectedCompetitorInventory.measure" is-error="competitor_inventory_error.measure" is-toggle-disabled="true"></enter-value>
                                                        </div>
                                                        <div className="col-md-12 need-margin-top">
                                                            <button-group className="col-md-4" options="competitorInventoryLevelOptions" ng-model="settings.selectedCompetitorInventory.level.type"></button-group>
                                                            <span className="col-md-1 rule-heading-col">than</span>
                                                            <enter-value className="col-md-5" data="settings.selectedCompetitorInventory.level.value" currency="userResponse.currency" is-percentage="settings.selectedCompetitorInventory.level" is-error="competitor_inventory_error.level" is-toggle-disabled="true"></enter-value>
                                                        </div>
                                                        <div className="col-md-3 need-margin-top">
                                                            <div>
                                                                <in-drop-down options="competitorHosts" display-property="'host_name'" ng-model="settings.selectedCompetitorInventory.host" default-text="Select Competitor" set-scope="setScope" model-name="'settings.selectedCompetitorInventory.host'" options-name="'ruleOptions.matchingStatusOptions'"></in-drop-down>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>

                                        {/* <!-- Sell Through Section --> */}
                                        <div className="clearfix">
                                            <div className="col-md-2 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <div className={`custom-checkbox ${settings.isSellThroughSelected ? 'checked-on' : ''}`}>
                                                        <input type="checkbox" name="" id="sell-through" ng-model="settings.isSellThroughSelected" ng-change="errors.customerpull_one_selection_error = errors.customerpull_one_selection_error ? !errors.customerpull_one_selection_error : errors.customerpull_one_selection_error" />
                                                        <label for="sell-through" className={`custom-label ${errors.customerpull_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                    </div>
                                                    <label for="sell-through">Sell through</label>
                                                </div>
                                            </div>
                                            {
                                                settings.isSellThroughSelected &&
                                                <div className="col-md-8">
                                                    <div className="col-md-12 need-margin-top">
                                                        <button-group className="col-md-4" options="sellThroughInventoryOptions" ng-model="settings.selectedSellThrough.measure.type"></button-group>
                                                        <span className="col-md-1 rule-heading-col">than</span>
                                                        <enter-value className="col-md-5" data="settings.selectedSellThrough.measure.value" currency="userResponse.currency" is-percentage="settings.selectedSellThrough.measure" is-error="sell_through_error.measure" is-toggle-disabled="true"></enter-value>
                                                    </div>
                                                    <div className="col-md-12 need-margin-top">
                                                        <button-group className="col-md-4" options="sellThroughInventoryLevelOptions" ng-model="settings.selectedSellThrough.level.type"></button-group>
                                                        <span className="col-md-1 rule-heading-col">than</span>
                                                        <enter-value className="col-md-5" data="settings.selectedSellThrough.level.value" currency="userResponse.currency" is-percentage="settings.selectedSellThrough.level" is-error="sell_through_error.level" is-toggle-disabled="true"></enter-value>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        }

                        {/* <!-- Tolerance --> */}
                        {
                            ruleOptions.show_tolerance &&
                            <div className="rule-section price-limit-margine row">
                                <div className="adjust-padding">
                                    <div className="rule-heading-col custom-chkbox-wrapper label-name">
                                        <div className={`custom-checkbox ${settings.isToleranceSelected ? 'checked-on' : ''}`}>
                                            <input type="checkbox" name="" id="tolerance" ng-model="settings.isToleranceSelected" />
                                            <label for="tolerance" className="custom-label"></label>
                                        </div>
                                        <label for="tolerance"><span>Tolerance</span></label>
                                    </div>
                                </div>
                                {
                                    settings.isToleranceSelected &&
                                    <div className="isToleranceSelected">
                                        <div className="clearfix">
                                            <div className="col-md-2 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <label><span>Lower Price Competitor</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-1 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <label><span>Minimum</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 need-margin-top adjust-padding">
                                                <enter-value data="settings.tolerance.lower_price.min" currency="userResponse.currency" is-percentage="isTolerancePercentage" is-error="tolerance_error.lower_price.min" is-toggle-disabled="true"></enter-value>
                                            </div>
                                            <div className="col-md-1 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <label><span>Maximum</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 need-margin-top adjust-padding">
                                                <enter-value data="settings.tolerance.lower_price.max" currency="userResponse.currency" is-percentage="isTolerancePercentage" is-error="tolerance_error.lower_price.max" is-toggle-disabled="true"></enter-value>
                                            </div>
                                            <div className="col-md-2 need-margin-top adjust-padding text-right paddign-right20">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <label><span>Price Corridors</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 btn-group apply-screen-btns need-margin-top adjust-padding">
                                                <button type="button" className={`btn btn-primary ${(settings.tolerance.lower_price.price_corridors == 'inside') ? 'active-btn' : ''}`} onClick={() => settings.tolerance.lower_price.price_corridors = 'inside'}>Inside</button>
                                                <button type="button" className={`btn btn-primary ${settings.tolerance.lower_price.price_corridors == 'outside' ? 'active-btn' : ''}`} onClick={() => settings.tolerance.lower_price.price_corridors = 'outside'}>Outside</button>
                                            </div>
                                        </div>

                                        <div className="clearfix">
                                            <div className="col-md-2 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <label><span>Higher Price Competitor</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-1 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <label><span>Minimum</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 need-margin-top adjust-padding">
                                                <enter-value data="settings.tolerance.higher_price.min" currency="userResponse.currency" is-percentage="isTolerancePercentage" is-error="tolerance_error.higher_price.min" is-toggle-disabled="true"></enter-value>
                                            </div>
                                            <div className="col-md-1 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <label><span>Maximum</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 need-margin-top adjust-padding">
                                                <enter-value data="settings.tolerance.higher_price.max" currency="userResponse.currency" is-percentage="isTolerancePercentage" is-error="tolerance_error.higher_price.max" is-toggle-disabled="true"></enter-value>
                                            </div>
                                            <div className="col-md-2 need-margin-top adjust-padding text-right paddign-right20">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <label><span>Price Corridors</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-2 btn-group apply-screen-btns need-margin-top adjust-padding">
                                                <button type="button" className={`btn btn-primary ${(settings.tolerance.higher_price.price_corridors == 'inside') ? 'active-btn' : ''}`} onClick={() => settings.tolerance.higher_price.price_corridors = 'inside'} ng-className="{'active-btn': settings.tolerance.higher_price.price_corridors == 'inside'}">Inside</button>
                                                <button type="button" className={`btn btn-primary ${(settings.tolerance.higher_price.price_corridors == 'outside') ? 'active-btn' : ''}`} ng-className="{'active-btn': settings.tolerance.higher_price.price_corridors == 'outside'}" onClick={() => settings.tolerance.higher_price.price_corridors = 'outside'}>Outside</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        }

                        {/* <!--Overlay Rule--> */}
                        {
                            ruleOptions.show_overlay_rule &&
                            <div className="rule-section price-limit-margine row">
                                <div className="adjust-padding">
                                    <div className="rule-heading-col custom-chkbox-wrapper label-name">
                                        <div className={`custom-checkbox ${settings.isOverlayRuleSelected ? 'checked-on' : ''}`}>
                                            <input type="checkbox" name="" id="overlay-rule" ng-model="settings.isOverlayRuleSelected" />
                                            <label for="overlay-rule" className="custom-label"></label>
                                        </div>
                                        <label for="overlay-rule">Overlay Rule</label>
                                    </div>
                                </div>
                                {
                                    settings.isOverlayRuleSelected &&
                                    <div>
                                        <div>
                                            <div className="col-md-2 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <div className={`custom-checkbox ${settings.isCharmPricingSelected ? 'checked-on' : ''}`}>
                                                        <input type="checkbox" name="" id="charm-pricing" ng-model="settings.isCharmPricingSelected" ng-change="errors.overlay_rule_one_selection_error = errors.overlay_rule_one_selection_error ? !errors.overlay_rule_one_selection_error : errors.overlay_rule_one_selection_error" />
                                                        <label for="charm-pricing" className={`custom-label ${errors.overlay_rule_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                    </div>
                                                    <label for="charm-pricing"><span>Charm Pricing</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-10 need-margin-top adjust-padding">
                                                <button-group className="col-md-5" options="charmPricingOptions" ng-model="settings.selectedCharmPricing.type"></button-group>
                                                <input type="number" placeholder="Enter value" className={`sku-input charm-pricing-input col-md-3 ${(errors.charm_price_value_error) ? 'error-red-highlight' : ''} ${(settings.selectedCharmPricing.type.id != 'other') ? 'disableOffline' : ''}`} ng-model="settings.selectedCharmPricing.value" ng-change="errors.charm_price_value_error = errors.charm_price_value_error ? !errors.charm_price_value_error : errors.charm_price_value_error" />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="col-md-2 need-margin-top adjust-padding">
                                                <div className="rule-heading-col inner-title custom-chkbox-wrapper label-name">
                                                    <div className={`custom-checkbox ${settings.isScheduleSelected ? 'checked-on' : ''}`}>
                                                        <input type="checkbox" name="" id="schedule" ng-model="settings.isScheduleSelected" ng-change="errors.overlay_rule_one_selection_error = errors.overlay_rule_one_selection_error ? !errors.overlay_rule_one_selection_error : errors.overlay_rule_one_selection_error" />
                                                        <label for="schedule" className={`custom-label ${errors.overlay_rule_one_selection_error ? 'error-red-highlight' : ''}`}></label>
                                                    </div>
                                                    <label for="schedule"><span>Apply only on</span></label>
                                                </div>
                                            </div>
                                            <div className="col-md-10 need-margin-top adjust-padding">
                                                <div className="col-md-1">
                                                    <input className={`input-spin-buttons ${errors.schedule_value_error ? 'error-red-highlight' : ''}`} type="number" min="1" ng-model="settings.selectedScheduleValue" ng-change="scheduleValueChanged()" />
                                                </div>
                                                <div className="col-md-2 tabcontent-text">
                                                    <in-drop-down single-select="true" search-visible="false" options="scheduleOptions" display-property="'name'" ng-model="settings.selectedSchedule" set-scope="setScope" model-name="'settings.selectedSchedule'" options-name="'scheduleOptions'"></in-drop-down>
                                                </div>
                                                {
                                                    (settings.selectedSchedule.id == 'week') &&
                                                    <button-group className="col-md-7 tabcontent-text" options="weekdays" ng-model="settings.selectedScheduleDays" multi-select="true"></button-group>
                                                }
                                                {
                                                    (settings.selectedSchedule.id == 'month') &&
                                                    <div className="col-md-4 tabcontent-text">
                                                        <in-drop-down single-select="true" search-visible="false" options="monthlyScheduleOptions" display-property="'name'" ng-model="settings.selectedMonthlySchedule" set-scope="setScope" model-name="'settings.selectedMonthlySchedule'" options-name="'monthlyScheduleOptions'"></in-drop-down>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
                    </div>


                    {/* <!-- Apply -rule- hover wrapper for condition when rule is set ENDS --> */}


                </div>
                <div className="modal-footer clearfix">
                    <div className="apply-rule-buttons pull-right">
                        <button type="button" onClick={() => { $parent.resetPanelScroll(); cancel() }} className="btn btn-default pull-left">Cancel</button>
                        <button type="button" className="btn btn-primary pull-left" onClick={() => { $parent.resetPanelScroll(); applyClicked() }}>Apply</button>
                    </div>
                </div>
            </modal-dialog>
        </>
    )
}

export default ApplyRulesFilter