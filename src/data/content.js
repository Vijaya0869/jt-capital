/**
 * All site copy and every figure, loaded from src/content/*.json.
 *
 * The JSON files are edited through the CMS at /admin (Decap, config in
 * public/admin/config.yml). Components import from here, not from the JSON,
 * so the CMS storage shape can differ from what components expect.
 *
 * EVERY FINANCIAL FIGURE IS ILLUSTRATIVE. They come from the Ohio Value-Add
 * Portfolio I model and are prepared to demonstrate the offering's structure
 * and underwriting method — not derived from executed agreements, appraisals
 * or lender commitments. Do not add a figure that is not in the model, and do
 * not remove the word "Illustrative" or the footer disclaimer: both are there
 * for securities reasons.
 *
 * DO NOT ADD: R&R Grandeur portfolio unit counts or years operating. Internal.
 */
import firmData from '../content/firm.json'
import navData from '../content/nav.json'
import heroData from '../content/hero.json'
import offeringData from '../content/offering.json'
import thesisData from '../content/thesis.json'
import strategyData from '../content/strategy.json'
import platformData from '../content/platform.json'
import structureData from '../content/structure.json'
import criteriaData from '../content/criteria.json'
import processData from '../content/process.json'
import contactData from '../content/contact.json'

// The CMS stores table rows as objects; DataTable takes [label, detail, value].
const table = (t) => ({ ...t, rows: t.rows.map((r) => [r.label, r.detail, r.value]) })

export const firm = firmData
export const nav = navData.items
export const hero = heroData
export const offering = offeringData

// Chapter numerals follow the section order in App.jsx, so they live in code
// rather than in the CMS.
export const thesis = { numeral: 'I', ...thesisData }
export const strategy = { numeral: 'II', ...strategyData }
export const platform = { numeral: 'III', ...platformData, table: table(platformData.table) }
export const structure = {
  numeral: 'IV',
  ...structureData,
  waterfall: table(structureData.waterfall),
  capitalization: table(structureData.capitalization),
}
export const criteria = { numeral: 'V', ...criteriaData }
export const process = { numeral: 'VI', ...processData }
export const contact = { numeral: 'VII', ...contactData }

/**
 * Required. Do not shorten or remove — reviewed for securities purposes.
 * Deliberately kept out of the CMS so it can only change through a code review.
 */
export const disclaimer =
  'This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security. Any such offer is made only to qualified investors through definitive offering documents containing complete information and risk disclosures. All financial figures shown are illustrative, are derived from the Manager’s assumptions rather than from executed agreements, third-party appraisals or lender commitments, and are not a prediction or guarantee of results. Assets described are under letter of intent or in pursuit and are not owned by the Company; there is no assurance any transaction will close. Real estate investments involve substantial risk, including possible loss of principal. Past performance does not guarantee future results. Nothing here is investment, legal or tax advice; consult your own advisors.'
