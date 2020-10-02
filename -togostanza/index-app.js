import { d as defineComponent, s as script$1, c as createBlock, r as resolveComponent, o as openBlock, w as withCtx, F as Fragment, a as renderList, b as createVNode, t as toDisplayString, e as createApp } from './Layout-5ac6dd07.js';

var script = defineComponent({
  components: {
    Layout: script$1
  },

  props: ['allMetadata'],

  setup(props) {
    return props;
  }
});

const _hoisted_1 = /*#__PURE__*/createVNode("h1", { class: "display-4" }, "List of Stanzas", -1 /* HOISTED */);
const _hoisted_2 = {
  key: 0,
  class: "list-group mt-3"
};
const _hoisted_3 = { class: "small text-muted text-truncate mt-1 mb-0" };
const _hoisted_4 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");

  return (openBlock(), createBlock(_component_Layout, null, {
    default: withCtx(() => [
      _hoisted_1,
      (_ctx.allMetadata.length > 0)
        ? (openBlock(), createBlock("div", _hoisted_2, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.allMetadata, (metadata) => {
              return (openBlock(), createBlock("a", {
                key: metadata['@id'],
                href: `./${metadata['@id']}.html`,
                class: "list-group-item list-group-item-action py-3"
              }, [
                createVNode("div", null, toDisplayString(metadata['stanza:label']), 1 /* TEXT */),
                createVNode("p", _hoisted_3, toDisplayString(metadata['stanza:definition']), 1 /* TEXT */)
              ], 8 /* PROPS */, ["href"]))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : (openBlock(), createBlock("p", _hoisted_4, "No stanzas defined."))
    ]),
    _: 1
  }))
}

script.render = render;
script.__file = "node_modules/togostanza/src/components/Index.vue";

var allMetadata = [{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"column_tree_view","stanza:label":"Column tree view","stanza:definition":"Column viewer metastanza for tree and DAG structures.","stanza:parameter":[{"stanza:key":"endpoint","stanza:example":"https://integbio.jp/rdf/sparql","stanza:description":"endpoint","stanza:required":true},{"stanza:key":"root","stanza:example":"http://identifiers.org/taxonomy/131567","stanza:description":"root node","stanza:required":true},{"stanza:key":"graph","stanza:example":"http://integbio.jp/rdf/ontology/taxonomy","stanza:description":"target graph","stanza:required":false},{"stanza:key":"subclass","stanza:example":"","stanza:description":"target subclass predicate (default: rdfs:subClassOf)","stanza:required":false},{"stanza:key":"label","stanza:example":"","stanza:description":"target label predicate (default: rdfs:label)","stanza:required":false},{"stanza:key":"search","stanza:example":"1","stanza:description":"search method. 1: regex (default), 2: bif:contains(exact), 3: bif:contains(partial).","stanza:required":false}],"stanza:usage":"<togostanza-column_tree_view endpoint='https://integbio.jp/rdf/sparql' root='http://identifiers.org/taxonomy/131567'></togostanza-column_tree_view>","stanza:type":"MetaStanza","stanza:context":"","stanza:display":"","stanza:provider":"DBCLS","stanza:license":"MIT","stanza:author":"Moriya, Yuki","stanza:address":"moriya@dbcls.rois.ac.jp","stanza:contributor":[],"stanza:created":"2020-07-21","stanza:updated":"2020-07-21"},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"table_body","stanza:label":"table body for pagination","stanza:definition":"Greeting.","stanza:parameter":[{"stanza:key":"table_data_api","stanza:example":"https://sparql-support.dbcls.jp/rest/api/protein_list","stanza:description":"table data api","stanza:required":true},{"stanza:key":"limit","stanza:example":"10","stanza:description":"table page size","stanza:required":true},{"stanza:key":"offset","stanza:example":"0","stanza:description":"page numbere","stanza:required":true},{"stanza:key":"params","stanza:example":"dataset='DS801_1'","stanza:description":"parameters for table data api","stanza:required":false}],"stanza:usage":"<togostanza-table_body></togostanza-table_body>","stanza:type":"Stanza","stanza:context":"","stanza:display":"","stanza:provider":"provider of this stanza","stanza:license":"","stanza:author":"author name","stanza:address":"name@example.org","stanza:contributor":[],"stanza:created":"2020-05-27","stanza:updated":"2020-05-27"},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"table_pagination","stanza:label":"Table pagination metastanza","stanza:definition":"metastanza for table pagination with slider.","stanza:parameter":[{"stanza:key":"table_data_count_api","stanza:example":"https://sparql-support.dbcls.jp/rest/api/protein_list?count=1","stanza:description":"table row count api","stanza:required":true},{"stanza:key":"table_stanza","stanza:example":"https://sparql-support.dbcls.jp/stanza/table_body/","stanza:description":"table stanza (req. 'limit' and 'offset' parameters)'","stanza:required":true},{"stanza:key":"params","stanza:example":"dataset=DS801_1","stanza:description":"parameters for count api","stanza:required":false},{"stanza:key":"table_stanza_params","stanza:example":"params='dataset=DS801_1' table_data_api='https://sparql-support.dbcls.jp/rest/api/protein_list'","stanza:description":"parameters for table stanza (except 'limit' and 'offset')","stanza:required":false},{"stanza:key":"page_opt","stanza:example":"10,20,50,100","stanza:description":"page size list","stanza:required":false},{"stanza:key":"slider","stanza:example":"1","stanza:description":"slider on/off","stanza:required":false},{"stanza:key":"top_button","stanza:example":"1","stanza:description":"top page button on/off","stanza:required":false},{"stanza:key":"bottom_button","stanza:example":"","stanza:description":"bottom page button on/off","stanza:required":false},{"stanza:key":"button_align","stanza:example":"center","stanza:description":"page button align (left, center, right), when 'slidr' off.","stanza:required":false}],"stanza:usage":"<togostanza-table_pagination></togostanza-table_pagination>","stanza:type":"MetaStanza","stanza:context":"Other","stanza:display":"Table","stanza:provider":"DBCLS","stanza:license":"MIT","stanza:author":"Moriya, Yuki","stanza:address":"moriya@dbcls.rois.ac.jp","stanza:contributor":[],"stanza:created":"2020-05-27","stanza:updated":"2020-05-27"},{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"table_pagination_at_once","stanza:label":"Table pagination metastanza - at once data loading","stanza:definition":"Metastanza for table pagination with slider, for API with slow response times that you don't want to run repeatedly. First, child-table-stanza gets all data (limit: endpoint limit rows) at once by API and renders all table rows, then hides rows by pagination.","stanza:parameter":[{"stanza:key":"table_stanza","stanza:example":"https://sparql-support.dbcls.jp/stanza/table_body/","stanza:description":"table stanza for all data (need 'tbody' tag in the table)","stanza:required":true},{"stanza:key":"table_stanza_params","stanza:example":"params='dataset=DS801_1' table_data_api='https://sparql-support.dbcls.jp/rest/api/protein_list' limit='none'","stanza:description":"parameters for table stanza","stanza:required":false},{"stanza:key":"page_opt","stanza:example":"10,20,50,100","stanza:description":"page size list","stanza:required":false},{"stanza:key":"slider","stanza:example":"1","stanza:description":"slider on/off","stanza:required":false},{"stanza:key":"top_button","stanza:example":"1","stanza:description":"top page button on/off","stanza:required":false},{"stanza:key":"bottom_button","stanza:example":"","stanza:description":"bottom page button on/off","stanza:required":false},{"stanza:key":"button_align","stanza:example":"center","stanza:description":"page button align (left, center, right), when 'slidr' off.","stanza:required":false}],"stanza:usage":"<togostanza-table_pagination_at_once></togostanza-table_pagination_at_once>","stanza:type":"MetaStanza","stanza:context":"","stanza:display":"","stanza:provider":"DBCLS","stanza:license":"MIT","stanza:author":"Moriya, Yuki","stanza:address":"moriya@dbcls.rois.ac.jp","stanza:contributor":[],"stanza:created":"2020-05-27","stanza:updated":"2020-05-27"}];

createApp(script, {allMetadata}).mount('body');
//# sourceMappingURL=index-app.js.map
