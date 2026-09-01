# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: campaigns\campaigns.spec.js >> deleteCampaign
- Location: tests\campaigns\campaigns.spec.js:227:5

# Error details

```
Error: locator.check: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '(//input[@type="checkbox")[2]' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6296:25)
    at InjectedScript._queryEngineAll (<anonymous>:6969:49)
    at InjectedScript.querySelectorAll (<anonymous>:6956:30)
    at callMatchedElements (eval at evaluate (:311:30), <anonymous>:2:29)
    at UtilityScript.evaluate (<anonymous>:313:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('xpath=(//input[@type="checkbox")[2]')

```

# Page snapshot

```yaml
- table [ref=f10e3]:
  - rowgroup [ref=f10e4]:
    - row [ref=f10e5]:
      - cell [ref=f10e6]:
        - img "logo" [ref=f10e7]
        - link "vtiger111" [ref=f10e8] [cursor=pointer]:
          - /url: http://www.vtiger.com
    - row [ref=f10e9]:
      - cell [ref=f10e10]:
        - table [ref=f10e12]:
          - rowgroup [ref=f10e13]:
            - row [ref=f10e14]:
              - cell "Get more out of vtiger CRM" [ref=f10e15]
            - row [ref=f10e16]:
              - cell [ref=f10e17]:
                - link [ref=f10e18] [cursor=pointer]:
                  - /url: http://www.vtiger.com/crm/official-add-ons/#Outlook
                  - img "Outlook Plugin" [ref=f10e19]
              - cell [ref=f10e20]:
                - link [ref=f10e21] [cursor=pointer]:
                  - /url: http://www.vtiger.com/crm/official-add-ons/#Exchange
                  - img "Exchange Connector" [ref=f10e22]
            - row [ref=f10e23]:
              - cell [ref=f10e24]:
                - link [ref=f10e25] [cursor=pointer]:
                  - /url: http://itunes.apple.com/us/app/vtiger-crm-mobile/id381259792?mt=8
                  - img "vtiger iPhone Application" [ref=f10e26]
                  - img "vtiger iPhone Application" [ref=f10e27]
              - cell [ref=f10e28]:
                - link [ref=f10e29] [cursor=pointer]:
                  - /url: https://market.android.com/details?id=com.vtiger.apps.gvtigerpro&feature=search_result
                  - img "vtiger Android Application" [ref=f10e30]
                  - img "vtiger Android Application" [ref=f10e31]
      - cell "Powered by vtiger CRM - 5.4.0 User Name Password Login Read License | Privacy Policy | © 2004- 2026" [ref=f10e32]:
        - generic [ref=f10e33]:
          - generic [ref=f10e34]: Powered by vtiger CRM - 5.4.0
          - generic [ref=f10e36]:
            - generic [ref=f10e37]: User Name
            - textbox [active] [ref=f10e39]
            - generic [ref=f10e40]: Password
            - textbox [ref=f10e42]
            - button "Login" [ref=f10e44] [cursor=pointer]
        - generic [ref=f10e45]:
          - link "Read License" [ref=f10e46] [cursor=pointer]:
            - /url: javascript:mypopup()
          - text: "|"
          - link "Privacy Policy" [ref=f10e47] [cursor=pointer]:
            - /url: http://www.vtiger.com/products/crm/privacy_policy.html
          - text: "| © 2004- 2026"
    - row [ref=f10e48]:
      - cell [ref=f10e49]:
        - text: Connect with us
        - link [ref=f10e50] [cursor=pointer]:
          - /url: http://www.facebook.com/pages/vtiger/226866697333578?sk=app_143539149057867
          - img "Facebook" [ref=f10e51]
        - link [ref=f10e52] [cursor=pointer]:
          - /url: http://twitter.com/#!/vtigercrm
          - img "Twitter" [ref=f10e53]
        - link [ref=f10e54] [cursor=pointer]:
          - /url: http://www.linkedin.com/company/1270573?trk=tyah
          - img "Linkedin" [ref=f10e55]
        - link [ref=f10e56] [cursor=pointer]:
          - /url: http://www.youtube.com/user/vtigercrm
          - img "Videos" [ref=f10e57]
        - link [ref=f10e58] [cursor=pointer]:
          - /url: http://wiki.vtiger.com/
          - img "Manuals" [ref=f10e59]
        - link [ref=f10e60] [cursor=pointer]:
          - /url: http://forums.vtiger.com/
          - img "Forums" [ref=f10e61]
        - link [ref=f10e62] [cursor=pointer]:
          - /url: http://blogs.vtiger.com/
          - img "Blogs" [ref=f10e63]
```